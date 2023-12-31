import { DiscountCalculator } from "../calculators/DiscountCalculator.js";
import { sumArray } from "../utils/calculate.js";
import { EventCheckManager } from "./EventCheckManager.js";

export class BenefitsManager {
  constructor() {
    this.discountCalculator = new DiscountCalculator();
    this.eventCheckManager = new EventCheckManager();
  }

  calculateBenefits(date, orderedCategories) {
    const christmas = this.discountCalculator.calculateChristmasDiscount(date);
    const weekdays = this.discountCalculator.calculateWeekdaysDiscount(
      date,
      orderedCategories
    );
    const weekends = this.discountCalculator.calculateWeekendsDiscount(
      date,
      orderedCategories
    );
    const special = this.discountCalculator.calculateSpecialDiscount(date);
    return [christmas, weekdays, weekends, special];
  }

  calculateTotalBenefits(date, sumAmount, orderedCategories) {
    // 할인 금액 계산
    const totalBenefitsArray = this.calculateBenefits(date, orderedCategories);
    // 이벤트 체크
    const giveawayDiscount =
      this.discountCalculator.calculateGiveawayDiscount(sumAmount);
    // 전체 혜택 합산
    const totalBenefits = {
      total: sumArray(totalBenefitsArray),
      giveaway: giveawayDiscount,
    };

    return totalBenefits;
  }
}
