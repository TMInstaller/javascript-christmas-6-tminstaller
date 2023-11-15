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
  checkIsUnderMinimum,
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
    if (checkIsUnderMinimum(sumAmount, EVENT.giveaway)) {
      Console.print(NOTHING_CONVENTION);
    }
    if (checkIsOver(sumAmount, EVENT.giveaway)) {
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
    const koreaMoney = convertNumberToKoreaMoney(christmasDiscountAmount);
    if (checkIsPositiveNumber(christmasDiscountAmount)) {
      Console.print(`${EVENT_NAME.christmas}: -${koreaMoney}`);
    }
    return christmasDiscountAmount;
  },
  printWeekdaysDiscountAmount(date, orderedCategories) {
    const weekdaysDiscountAmount = discountCalculator.calculateWeekdaysDiscount(
      date,
      orderedCategories
    );
    const koreaMoney = convertNumberToKoreaMoney(weekdaysDiscountAmount);
    if (checkIsPositiveNumber(weekdaysDiscountAmount)) {
      Console.print(`${EVENT_NAME.weekdays}: -${koreaMoney}`);
    }
  },
  printWeekendsDiscountAmount(date, orderedCategories) {
    const weekendsDiscountAmount = discountCalculator.calculateWeekendsDiscount(
      date,
      orderedCategories
    );
    const koreaMoney = convertNumberToKoreaMoney(weekendsDiscountAmount);
    if (checkIsPositiveNumber(weekendsDiscountAmount)) {
      Console.print(`${EVENT_NAME.weekends}: -${koreaMoney}`);
    }
    return weekendsDiscountAmount;
  },
  printSpecialDiscountAmount(date) {
    const specialDiscountAmount =
      discountCalculator.calculateSpecialDiscount(date);
    const koreaMoney = convertNumberToKoreaMoney(specialDiscountAmount);
    if (specialDiscountAmount !== 0) {
      Console.print(`${EVENT_NAME.special}: -${koreaMoney}`);
    }
    return specialDiscountAmount;
  },
  printGiveawayDiscountAmount(sumAmount) {
    const giveawayDiscountAmount =
      discountCalculator.calculateGiveawayDiscount(sumAmount);
    const koreaMoney = convertNumberToKoreaMoney(giveawayDiscountAmount);
    if (checkIsNotZero(giveawayDiscountAmount)) {
      Console.print(`${EVENT_NAME.giveaway}: -${koreaMoney}`);
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
    const discountKoreaMoney = convertNumberToKoreaMoney(
      priceBeforeDiscount - totalBenefitsPrice.total
    );
    Console.print(BENEFITS_MESSAGE.priceAfterDiscount);
    if (checkIsTypeObject(totalBenefitsPrice)) {
      Console.print(discountKoreaMoney);
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
  printResults(resultsData) {
    this.printOrderDetails(resultsData);
    const totalBenefitsPrice = this.printBenefitsDetails(resultsData);
    this.printFinalResults(resultsData, totalBenefitsPrice);
  },
  printOrderDetails({ orderedMenu, amountBeforeDiscount }) {
    this.printOrderedMenu(orderedMenu);
    this.printPriceBeforeDiscount(amountBeforeDiscount);
    this.printSatisfiedGiveAwayMenu(amountBeforeDiscount);
  },
  printBenefitsDetails({
    dateToVisit,
    amountBeforeDiscount,
    orderedCategories,
  }) {
    return this.printBenefits(
      dateToVisit,
      amountBeforeDiscount,
      orderedCategories
    );
  },
  printFinalResults({ amountBeforeDiscount }, totalBenefitsPrice) {
    this.printTotalBenefitsPrice(totalBenefitsPrice);
    this.printPriceAfterDiscount(amountBeforeDiscount, totalBenefitsPrice);
    this.printSatisfiedEventBadge(totalBenefitsPrice);
  },
};

export default OutputView;
