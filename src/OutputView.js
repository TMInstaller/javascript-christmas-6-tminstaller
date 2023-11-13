import { Console } from "@woowacourse/mission-utils";
import { BENEFITS_MESSAGE, EMPTY_LINE } from "./constants/message.js";
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
  checkIsPositiveNumber,
  checkIsTypeObject,
} from "./utils/condition.js";
import { sumArray } from "./utils/calculate.js";

const eventCheckManager = new EventCheckManager();

const OutputView = {
  printDivideSection() {
    Console.print(EMPTY_LINE);
  },

  printError(error) {
    Console.print(error);
  },

  printNothing() {
    Console.print(NOTHING_CONVENTION);
  },

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

  // TODO: 추후에 이벤트가 없을때와 있을때로 메서드 분리
  printBenefits(date, sumAmount, orderedCategories) {
    Console.print(BENEFITS_MESSAGE.benefits);
    if (sumAmount < EVENT.minimumAmount) {
      Console.print(NOTHING_CONVENTION);
    }
    if (sumAmount >= EVENT.minimumAmount) {
      // 크리스마스 조건문
      const christmasDiscountAmount =
        eventCheckManager.checkChristmasDiscountAmount(date);

      if (checkIsPositiveNumber(christmasDiscountAmount)) {
        Console.print(
          `${EVENT_NAME.christmas}: -${convertNumberToKoreaMoney(
            christmasDiscountAmount
          )}`
        );
      }
      // 평일 조건문
      const weekdaysDiscountAmount =
        eventCheckManager.checkWeekDaysEventDiscountAmount(
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
      // 주말 조건문
      const weekendsDiscountAmount =
        eventCheckManager.checkWeekendEventDiscountAmount(
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
      // 특별 조건문
      const specialDiscountAmount =
        eventCheckManager.checkSpecialEventDiscountAmount(date);
      if (specialDiscountAmount !== 0) {
        Console.print(
          `${EVENT_NAME.special}: -${convertNumberToKoreaMoney(
            specialDiscountAmount
          )}`
        );
      }
      // 증정 조건문
      const giveawayDiscountAmount =
        eventCheckManager.checkGiveawayEventDiscountAmount(sumAmount);
      if (checkIsNotZero(giveawayDiscountAmount)) {
        Console.print(
          `${EVENT_NAME.giveaway}: -${convertNumberToKoreaMoney(
            giveawayDiscountAmount
          )}`
        );
      }

      // 여기에 혜택금액 합과 증정 혜택금액을 return
      // TODO: 이부분도 모듈화
      const totalBenefitsArray = [
        christmasDiscountAmount,
        weekdaysDiscountAmount,
        weekendsDiscountAmount,
        specialDiscountAmount,
      ];
      const totalBenefitsPrice = {
        total: sumArray(totalBenefitsArray),
        giveaway: giveawayDiscountAmount,
      };
      Console.print(EMPTY_LINE);
      return totalBenefitsPrice;
    }
    Console.print(EMPTY_LINE);
    return 0;
  },

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
      Console.print(NOTHING_CONVENTION);
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
