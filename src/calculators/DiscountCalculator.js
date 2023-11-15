import { BENEFITS, CHRISTMAS_D_DAY } from "../constants/number.js";
import { EventCheckManager } from "../managers/EventCheckManager.js";
import { checkIsOver } from "../utils/condition.js";
import { makeMatrixOrderableMenu } from "../utils/creation.js";

export class DiscountCalculator {
  constructor() {
    this.eventCheckManager = new EventCheckManager();
  }
  calculateChristmasDiscount(date) {
    if (checkIsOver(CHRISTMAS_D_DAY.endDate, date)) {
      const christmasDiscount =
        CHRISTMAS_D_DAY.initialDiscountAmount +
        (date - 1) * CHRISTMAS_D_DAY.discountRateIncrease;
      return christmasDiscount;
    }
    return BENEFITS.none;
  }
  calculateWeekdaysDiscount(date, orderedCategories) {
    const weekDays = [
      3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28,
      31,
    ];
    if (weekDays.includes(date) && !isNaN(orderedCategories.DESSERT)) {
      const weekdaysDisocunt = BENEFITS.dayOfWeek * orderedCategories.DESSERT;
      return weekdaysDisocunt;
    }
    return BENEFITS.none;
  }
  calculateWeekendsDiscount(date, orderedCategories) {
    const specialDays = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];
    if (specialDays.includes(date) && !isNaN(orderedCategories.MAIN)) {
      return BENEFITS.dayOfWeek * orderedCategories.MAIN;
    }
    return BENEFITS.none;
  }
  calculateSpecialDiscount(date) {
    const specialDays = [3, 10, 17, 24, 25, 31];
    if (specialDays.includes(date)) {
      return BENEFITS.special;
    }
    return BENEFITS.none;
  }
  calculateGiveawayDiscount(price) {
    if (checkIsOver(price, BENEFITS.giveawayCondition)) {
      return BENEFITS.giveaway;
    }
    return BENEFITS.none;
  }
  calculateTotalAmount(matrixData) {
    const orderedMenu = makeMatrixOrderableMenu();
    // matrixData의 각 항목에 해당하는 가격을 찾아 합산
    let countAmount = 0;
    for (const [menuItem, quantity] of matrixData) {
      const priceInfo = orderedMenu.find(
        ([, koreanName]) => koreanName === menuItem
      );
      if (priceInfo) {
        const price = priceInfo[3];
        countAmount += price * quantity;
      }
    }
    return countAmount;
  }
  calculateDiscounts(orderedMenu) {
    const amountBeforeDiscount = this.calculateTotalAmount(orderedMenu);
    const orderedCategories =
      this.eventCheckManager.checkHowManyMenuInCategory(orderedMenu);
    return { amountBeforeDiscount, orderedCategories };
  }
}
