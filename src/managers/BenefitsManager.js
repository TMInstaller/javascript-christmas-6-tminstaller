import { DiscountCalculator } from "../calculators/DiscountCalculator.js";
import { sumArray } from "../utils/calculate.js";
import { EventCheckManager } from "./EventCheckManager.js";

// TODO: 완성시키고 적용할 것
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

  determineEventBadge(totalBenefits) {
    if (totalBenefits >= 20000) {
      return "산타";
    } else if (totalBenefits >= 10000) {
      return "트리";
    } else if (totalBenefits >= 5000) {
      return "별";
    }
  }
}
