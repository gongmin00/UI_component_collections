export interface PrizeItemProps {
    prizeId: string;
    prizeType?: string;
    prizeName?: string;
    prizeNameEn?: string;
    level?: number;
    image?: string;
    imageEn?: string;
    instructions?: string;
    instructionsEn?: string;
    order?: number;
}
export const prizeList: PrizeItemProps[] = [
    {
        prizeId: "ac8d3045063646bd8a367fb5e796a5e5",
        prizeType: "PHYSICAL",
        prizeName: "苹果15手机",
        prizeNameEn: "iphone15",
        level: 1,
        image: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/dc62f5ec225547098deb5bc46fb8892a/1814238096661790720.png",
        imageEn: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/bf490fc992e64e58be9d0c01e0eaab15/1814238110033231872.png",
        instructions: "1",
        instructionsEn: "2"
    },
    {
        prizeId: "bfb0ba6f595248e4ab4dfbeb9c304c11",
        prizeType: "PHYSICAL",
        prizeName: "神秘礼盒",
        prizeNameEn: "英文",
        level: 1,
        image: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/36e3c0fbe5804a8cb6f38c536eb2386f/1814238231550607360.png",
        imageEn: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/e8c8ae494095469ea324a450f690186a/1814238245274370048.png",
        instructions: "2",
        instructionsEn: "3"
    },
    {
        prizeId: "910675cbb7b64158b7ec199ae39cd7b8",
        prizeType: "PHYSICAL",
        prizeName: "现金红包",
        prizeNameEn: "20 Coupons",
        level: 2,
        image: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/e9e33b52eb9443648254a7a696556ff7/1814238686137663488.png",
        imageEn: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/d0261e65af4b445c9cc5ba459de471ce/1814238700100501504.png",
        instructions: "5",
        instructionsEn: "5"
    },
    {
        prizeId: "e16ec45835204adfa45073588b69b4c0",
        prizeType: "PHYSICAL",
        prizeName: "商务行李箱",
        prizeNameEn: "商务行李箱en",
        level: 2,
        image: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/4c4fed216b56452587cdeabe34602d7a/1814238915008249856.png",
        imageEn: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/f0f443bd5396470db23ff6a68510a163/1814238928824287232.png",
        instructions: "3",
        instructionsEn: "4"
    },
    {
        prizeId: "ad94174d44614f08a5aab654c3c65c02",
        prizeType: "PHYSICAL",
        prizeName: "农夫山泉",
        prizeNameEn: "一箱橙子en",
        level: 3,
        image: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/af998089a0f84cfab5f6423574204b97/1814239095262658560.png",
        imageEn: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/057b436317a243ff932c173e336fc64c/1814239116750077952.png",
        instructions: "3",
        instructionsEn: "4"
    },
    {
        prizeId: "ed33c4465dce42aeac8a3714416dd34f",
        prizeType: "PHYSICAL",
        prizeName: "农夫山泉",
        prizeNameEn: "农夫山泉en",
        level: 3,
        image: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/339fb3f0591243a69e993fff1ae4fa17/1814239291140849664.png",
        imageEn: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/6e0a1d039cc844d59f65de7a868e8b2d/1814239304742977536.png",
        instructions: "3",
        instructionsEn: "4"
    },
    {
        prizeId: "3e1a9bffd5fa4712be78679f748925a6",
        prizeType: "PHYSICAL",
        prizeName: "现金红包",
        prizeNameEn: "20 Coupons",
        level: 0,
        image: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/e4388e41d4ee4e43bb7d1ba1c0fcebaa/1814239440030253056.png",
        imageEn: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/8f4c93f470554dc68f4137d162bc4316/1814239459194028032.png",
        instructions: "4",
        instructionsEn: "5"
    },
    {
        prizeId: "4a953237c94f456a9477ba737e580629",
        prizeType: "PHYSICAL",
        prizeName: "橙子",
        prizeNameEn: "橙子en",
        level: 0,
        image: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/1f964ae186c1415ea7bf33bd990166b9/1814239636453703680.png",
        imageEn: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/fe4055b841734e109872f5b2c500e873/1814239596330991616.png",
        instructions: "4",
        instructionsEn: "4"
    }
]

export const winPrize = {
    prizeId: "4a953237c94f456a9477ba737e580629",
    prizeType: "PHYSICAL",
    prizeName: "橙子",
    prizeNameEn: "橙子en",
    level: 0,
    stock: null,
    stockLimit: 0,
    safeguardRule: {
        days: null,
        times: null
    },
    image: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/1f964ae186c1415ea7bf33bd990166b9/1814239636453703680.png",
    imageEn: "https://fantuandev.fantuan.ca/fantuan/ca/default/png/fe4055b841734e109872f5b2c500e873/1814239596330991616.png",
    isMembershipCoupon: null,
    cards: null,
    totalAmount: null,
    instructions: "4",
    instructionsEn: "4",
    promoCodeId: null,
    realStock: null,
    wonNumber: null
},