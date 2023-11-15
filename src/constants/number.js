export const PRICE = Object.freeze({
  pineMushroomSoup: 6000,
  tapas: 5500,
  caesarSalad: 8000,
  tBoneSteak: 55000,
  bbqRibs: 54000,
  seafoodPasta: 35000,
  christmasPasta: 25000,
  chocolateCake: 15000,
  icecream: 5000,
  zeroCoke: 3000,
  redWine: 60000,
  champagne: 25000,
});

export const CHRISTMAS_D_DAY = Object.freeze({
  startDate: 1,
  endDate: 25,
  initialDiscountAmount: 1000,
  discountRateIncrease: 100,
  maxDiscountAmount: 3400,
});

export const EVENT = Object.freeze({
  startDate: 1,
  endDate: 31,
  minimumAmount: 10000,
  giveaway: 120000,
  starBadge: 5000,
  treeBadge: 10000,
  santaBadge: 20000,
});

export const MENU_COUNT = Object.freeze({
  minimum: 1,
  maximun: 20,
});

export const BENEFITS = Object.freeze({
  none: 0,
  giveawayCondition: 120000,
  giveaway: 25000,
  dayOfWeek: 2023,
  special: 1000,
});

export const GIVEAWAY_COUNT = 1;

export const EVENT_DATE = Object.freeze({
  weekdays: [
    3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28,
    31,
  ],
  weekends: [1, 2, 8, 9, 15, 16, 22, 23, 29, 30],
  specialDays: [3, 10, 17, 24, 25, 31],
});
