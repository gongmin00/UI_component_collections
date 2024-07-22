import React, { useState, useRef, useEffect } from 'react';
import { Card } from 'antd-mobile';
import styles from './index.module.scss';
import { prizeList, PrizeItemProps } from './constant';

type newPrizeItemProps = PrizeItemProps & {
  order?: number;
};
interface RunRefType {
  currSpeed: number;
  currStep: number;
  timer: ReturnType<typeof setTimeout> | null;
  pauseTimer: ReturnType<typeof setTimeout> | null;
}
interface RefObjectType {
  handleDraw: (prize: PrizeItemProps) => void;
}
const PrizeCard = ({
  prizeItem,
  currOrder,
  isRunning,
  isPause,
}: {
  prizeItem: newPrizeItemProps;
  currOrder: number;
  isRunning: boolean;
  isPause: boolean;
}) => {
  // @ts-ignore
  const { locale } = useSelector((state) => state.global);
  return (
    <>
      {prizeItem?.order === 4 ? (
        <Card className={`${styles.prizeCard} ${styles.centerCard}`}>
          <div className={`${styles.centerTxt} ${styles.txtOne}`}>100%</div>
          <div className={`${styles.centerTxt} ${styles.txtTwo}`}>中奖</div>
        </Card>
      ) : (
        <Card
          className={`${styles.prizeCard} ${
            // currOrder === prizeItem?.order ? '' : styles.deactivatedCard
            isPause
              ? styles.deactivatedCard
              : isRunning
              ? currOrder === prizeItem?.order
                ? ''
                : styles.deactivatedCard
              : currOrder === prizeItem?.order
              ? styles.activeCard
              : ''
          }`}
        >
          <img className={styles.prizeImg} src={prizeItem.image} />
          <div className={styles.prizeTxt}>
            <div className={styles.prizeName}>{prizeItem.prizeName}</div>
          </div>
        </Card>
      )}
    </>
  );
};

const DrawOption = {
  centerCardIndex: 4,
  baseCircle: 5, // 要跑完的圈数
  actionOrder: [0, 1, 2, 5, 8, 7, 6, 3], // 顺时针跑动
  initSpeed: 40, // 初速度
  fastSpeed: 40, // 最快速度
  slowSpeed: 1000, // 最慢速度
  normalSpeed: 1000, // 平时速度
};
const LotteryDraw = ({
  drawRef,
  onDrawComplete,
}: {
  drawRef?: React.MutableRefObject<RefObjectType>;
  onDrawComplete: () => void;
}) => {
  const [currOrder, setCurrOrder] = useState(0);
  const runRef: React.MutableRefObject<RunRefType> = useRef({
    currSpeed: 0,
    currStep: 0,
    timer: null,
    pauseTimer: null,
  });
  const [isRunning, setIsRunning] = useState(false);
  const [isPause, setPause] = useState(false); // 开始抽奖跑马灯之前的暂停特效开关
  // const hasInit = useRef(false);
  // 生成9宫格
  const centerIndex = DrawOption?.centerCardIndex;
  // 防止prizeList变化带来的bug
  const prizeListCopy = [...prizeList];
  prizeListCopy.splice(centerIndex, 0, {
    order: centerIndex,
    prizeId: '',
  });

  const newPrizeList = prizeListCopy.map((item: PrizeItemProps, index: any) => {
    if (!item?.order) {
      return { ...item, order: index };
    } else {
      return { ...item };
    }
  });

  // 计算速度
  const calcSpeed = (totalSteps: number) => {
    const len = newPrizeList?.length;
    // 前1/3 需要加速的步数
    const acceSteps = Math.floor(DrawOption?.baseCircle * len * (1 / 3));
    // 需要减速的后段步数
    const deceSteps = Math.floor(totalSteps * (4 / 6));
    if (
      runRef?.current?.currStep < acceSteps &&
      runRef?.current?.currSpeed > DrawOption?.fastSpeed
    ) {
      runRef.current.currSpeed =
        runRef.current.currSpeed -
        Math.floor((DrawOption?.initSpeed - DrawOption?.fastSpeed) / acceSteps);
    } else if (
      runRef?.current?.currStep > deceSteps &&
      runRef?.current?.currSpeed < DrawOption?.slowSpeed
    ) {
      runRef.current.currSpeed =
        runRef.current.currSpeed +
        Math.floor((DrawOption?.slowSpeed - DrawOption?.fastSpeed) / acceSteps / 4);
    }
  };
  const runDraw = (totalSteps: number) => {
    runRef?.current?.timer && clearTimeout(runRef?.current?.timer);
    if (runRef?.current?.currStep > totalSteps) {
      setIsRunning(false);
      onDrawComplete();
      setIsRunning(false);
      return;
    }
    setCurrOrder(DrawOption?.actionOrder[runRef?.current?.currStep % 8]);
    calcSpeed(totalSteps);
    runRef.current.timer = setTimeout(() => {
      runRef.current.currStep += 1;
      runDraw(totalSteps);
    }, runRef?.current?.currSpeed);
  };
  const handleDraw = (prize: PrizeItemProps) => {
    // 每次执行前清理timeout
    if (runRef?.current?.pauseTimer) {
      clearTimeout(runRef?.current?.pauseTimer);
    }
    // 获得中奖奖品卡片位置
    const winPrizeId = prize?.prizeId;
    const winIndex = DrawOption?.actionOrder.findIndex(
      (num) => num === Number(newPrizeList?.findIndex((item) => item?.prizeId === winPrizeId)),
    );
    // 总步数 = 总圈数 * 每圈步数 + 走到中奖卡片位置的步数
    const totalSteps = DrawOption?.baseCircle * 8 + winIndex;
    if (!isRunning) {
      setPause(true); // 1秒停顿开关
      runRef.current.pauseTimer = setTimeout(() => {
        setPause(false);
        setIsRunning(true); // 跑马灯特效开关
        // 开始跑前重置跑马灯;
        runRef.current.currStep = DrawOption?.actionOrder?.indexOf(currOrder);
        runRef.current.currSpeed = DrawOption?.initSpeed;
        runDraw(totalSteps);
      }, 1000);
    }
  };
  // 把handleDraw 提到父组件里
  useEffect(() => {
    if (drawRef?.current) {
      drawRef.current = { handleDraw };
    }
  }, [prizeList, currOrder]);
  // 控制非抽奖时段的跑马灯循环;
  useEffect(() => {
    if (!isRunning) {
      const interval = setInterval(() => {
        setCurrOrder((prev) => {
          const prevIndex = DrawOption?.actionOrder.indexOf(prev);
          return DrawOption?.actionOrder[(prevIndex + 1) % 8];
        });
      }, DrawOption?.normalSpeed);
      return () => clearInterval(interval);
    }
    return () => {};
  }, [isRunning]);
  // 清除抽奖时段的1秒停顿的timeout;
  useEffect(() => {
    return () => {
      if (runRef?.current?.pauseTimer) {
        clearTimeout(runRef?.current?.pauseTimer);
      }
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.lotteryDraw}>
        {newPrizeList?.map((item: newPrizeItemProps) => (
          <PrizeCard
            key={item?.prizeId}
            prizeItem={item}
            currOrder={currOrder}
            isRunning={isRunning}
            isPause={isPause}
          />
        ))}
      </div>
    </div>
  );
};

export default LotteryDraw;
