import { Console } from "@woowacourse/mission-utils";
import {
  BENEFITS_MESSAGE,
  EMPTY_LINE,
  INPUT_MESSAGE,
} from "./constants/message.js";
import { NOTHING_CONVENTION } from "./constants/convention.js";
import { EVENT_NAME } from "./constants/word.js";
import {
  convertMatrixItemToFormattedString,
  convertNumberToKoreaMoney,
} from "./utils/conversion.js";
import { EventCheckManager } from "./managers/EventCheckManager.js";
import { EVENT } from "./constants/number.js";
import {
  checkIsNotZero,
  checkIsOver,
  checkIsPositiveNumber,
  checkIsTypeObject,
  checkIsUnder,
} from "./utils/condition.js";
import { sumArray } from "./utils/calculate.js";
import { DiscountCalculator } from "./calculators/DiscountCalculator.js";
import { BenefitsManager } from "./managers/BenefitsManager.js";

const eventCheckManager = new EventCheckManager();
const benefitsManager = new BenefitsManager();
const discountCalculator = new DiscountCalculator();

const OutputView = {
  // 기본 출력 메서드
  printDivideSection() {
    Console.print(EMPTY_LINE);
  },
  printError(error) {
    Console.print(error);
  },
  printNothing() {
    Console.print(NOTHING_CONVENTION);
  },

  // 시작 메세지 출력 메서드
  printStartMessage() {
    Console.print(INPUT_MESSAGE.introducePlanner);
  },

  // 주문 및 가격 관련 출력
  printBenefitsIntro() {
    Console.print(BENEFITS_MESSAGE.introducePreview);
    this.printDivideSection();
  },
  printOrderedMenu(orderedMenu) {
    Console.print(BENEFITS_MESSAGE.orderedMenu);
    Console.print(convertMatrixItemToFormattedString(orderedMenu));
    this.printDivideSection();
  },
  printPriceBeforeDiscount(sumAmount) {
    Console.print(BENEFITS_MESSAGE.priceBeforeDiscount);
    Console.print(convertNumberToKoreaMoney(sumAmount));
    Console.print(EMPTY_LINE);
  },
  printSatisfiedGiveAwayMenu(sumAmount) {
    Console.print(BENEFITS_MESSAGE.giveawayMenu);
    if (sumAmount < EVENT.giveaway) {
      Console.print(NOTHING_CONVENTION);
    }
    if (sumAmount >= EVENT.giveaway) {
      Console.print(BENEFITS_MESSAGE.giveawayGoods);
    }
    Console.print(EMPTY_LINE);
  },

  // 할인 및 이벤트 관련 출력
  printBenefitsItems(date, orderedCategories) {
    this.printChristmasDiscountAmount(date);
    this.printWeekdaysDiscountAmount(date, orderedCategories);
    this.printWeekendsDiscountAmount(date, orderedCategories);
    this.printSpecialDiscountAmount(date);
  },
  printChristmasDiscountAmount(date) {
    const christmasDiscountAmount =
      discountCalculator.calculateChristmasDiscount(date);
    if (checkIsPositiveNumber(christmasDiscountAmount)) {
      Console.print(
        `${EVENT_NAME.christmas}: -${convertNumberToKoreaMoney(
          christmasDiscountAmount
        )}`
      );
    }
    return christmasDiscountAmount;
  },
  printWeekdaysDiscountAmount(date, orderedCategories) {
    const weekdaysDiscountAmount = discountCalculator.calculateWeekdaysDiscount(
      date,
      orderedCategories
    );
    if (checkIsPositiveNumber(weekdaysDiscountAmount)) {
      Console.print(
        `${EVENT_NAME.weekdays}: -${convertNumberToKoreaMoney(
          weekdaysDiscountAmount
        )}`
      );
    }
  },
  printWeekendsDiscountAmount(date, orderedCategories) {
    const weekendsDiscountAmount = discountCalculator.calculateWeekendsDiscount(
      date,
      orderedCategories
    );
    if (checkIsPositiveNumber(weekendsDiscountAmount)) {
      Console.print(
        `${EVENT_NAME.weekends}: -${convertNumberToKoreaMoney(
          weekendsDiscountAmount
        )}`
      );
    }
    return weekendsDiscountAmount;
  },
  printSpecialDiscountAmount(date) {
    const specialDiscountAmount =
      discountCalculator.calculateSpecialDiscount(date);
    if (specialDiscountAmount !== 0) {
      Console.print(
        `${EVENT_NAME.special}: -${convertNumberToKoreaMoney(
          specialDiscountAmount
        )}`
      );
    }
    return specialDiscountAmount;
  },
  printGiveawayDiscountAmount(sumAmount) {
    const giveawayDiscountAmount =
      discountCalculator.calculateGiveawayDiscount(sumAmount);
    if (checkIsNotZero(giveawayDiscountAmount)) {
      Console.print(
        `${EVENT_NAME.giveaway}: -${convertNumberToKoreaMoney(
          giveawayDiscountAmount
        )}`
      );
    }
    return giveawayDiscountAmount;
  },

  // 혜택 관련 출력
  printBenefitsWhenIsUnderAmount(sumAmount) {
    if (checkIsUnder(sumAmount, EVENT.minimumAmount)) {
      Console.print(NOTHING_CONVENTION);
    }
  },
  printBenefitsWhenIsOverAmount(date, sumAmount, orderedCategories) {
    this.printBenefitsItems(date, orderedCategories);
    const totalBenefitsArray = benefitsManager.calculateBenefits(
      date,
      orderedCategories
    );
    const giveawayDiscountAmount = this.printGiveawayDiscountAmount(sumAmount);
    const totalBenefitsPrice = {
      total: sumArray(totalBenefitsArray),
      giveaway: giveawayDiscountAmount,
    };
    Console.print(EMPTY_LINE);
    return totalBenefitsPrice;
  },
  printBenefits(date, sumAmount, orderedCategories) {
    Console.print(BENEFITS_MESSAGE.benefits);
    this.printBenefitsWhenIsUnderAmount(sumAmount);
    if (checkIsOver(sumAmount, EVENT.minimumAmount)) {
      const totalBenefitsPrice = this.printBenefitsWhenIsOverAmount(
        date,
        sumAmount,
        orderedCategories
      );
      return totalBenefitsPrice;
    }
    Console.print(EMPTY_LINE);
    return 0;
  },

  // 최종 결과 출력
  printTotalBenefitsPrice(totalBenefitsPrice) {
    Console.print(BENEFITS_MESSAGE.totalBenefitsPrice);
    if (checkIsTypeObject(totalBenefitsPrice)) {
      const total = totalBenefitsPrice.total + totalBenefitsPrice.giveaway;
      Console.print(`-${convertNumberToKoreaMoney(total)}`);
    } else {
      Console.print(NOTHING_CONVENTION);
    }
    Console.print(EMPTY_LINE);
  },
  printPriceAfterDiscount(priceBeforeDiscount, totalBenefitsPrice) {
    Console.print(BENEFITS_MESSAGE.priceAfterDiscount);
    if (checkIsTypeObject(totalBenefitsPrice)) {
      Console.print(
        `${convertNumberToKoreaMoney(
          priceBeforeDiscount - totalBenefitsPrice.total
        )}`
      );
    } else {
      Console.print(convertNumberToKoreaMoney(priceBeforeDiscount));
    }
    Console.print(EMPTY_LINE);
  },
  printSatisfiedEventBadge(totalBenefitsPrice) {
    Console.print(BENEFITS_MESSAGE.eventBadge);
    const totalBenefits =
      totalBenefitsPrice.total + totalBenefitsPrice.giveaway;
    if (
      checkIsTypeObject(totalBenefitsPrice) &&
      totalBenefits >= EVENT.starBadge
    ) {
      const badgeToTake = eventCheckManager.checkBadgeToTake(totalBenefits);
      Console.print(badgeToTake);
    } else {
      Console.print(NOTHING_CONVENTION);
    }
    Console.print(EMPTY_LINE);
  },
};

export default OutputView;
