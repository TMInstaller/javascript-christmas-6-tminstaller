import { BENEFITS, CHRISTMAS_D_DAY, EVENT_DATE } from "../constants/number.js";
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
    if (
      EVENT_DATE.weekdays.includes(date) &&
      !isNaN(orderedCategories.DESSERT)
    ) {
      const weekdaysDisocunt = BENEFITS.dayOfWeek * orderedCategories.DESSERT;
      return weekdaysDisocunt;
    }
    return BENEFITS.none;
  }
  calculateWeekendsDiscount(date, orderedCategories) {
    if (EVENT_DATE.weekends.includes(date) && !isNaN(orderedCategories.MAIN)) {
      return BENEFITS.dayOfWeek * orderedCategories.MAIN;
    }
    return BENEFITS.none;
  }
  calculateSpecialDiscount(date) {
    if (EVENT_DATE.specialDays.includes(date)) {
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
