import { Console } from "@woowacourse/mission-utils";
import { BENEFITS_MESSAGE, EMPTY_LINE } from "./constants/message.js";
import {
  COUNT_CONVENTION,
  NOTHING_CONVENTION,
} from "./constants/convention.js";
import { EVENT_NAME } from "./constants/word.js";
import { makeNumberToKoreaMoney } from "./utils/conversion.js";
import { EventCheckManager } from "./managers/EventCheckManager.js";

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
    Console.print(
      orderedMenu
        .map(
          ([menuItem, quantity]) => `${menuItem} ${quantity}${COUNT_CONVENTION}`
        )
        .join("\n")
    );
    this.printDivideSection();
  },

  printPriceBeforeDiscount(sumAmount) {
    Console.print(BENEFITS_MESSAGE.priceBeforeDiscount);
    const formattedAmount = makeNumberToKoreaMoney(sumAmount);
    Console.print(formattedAmount);
    Console.print(EMPTY_LINE);
  },

  printSatisfiedGiveAwayMenu(sumAmount) {
    Console.print(BENEFITS_MESSAGE.giveawayMenu);
    if (sumAmount < 120000) {
      Console.print(NOTHING_CONVENTION);
    }
    if (sumAmount >= 120000) {
      Console.print(BENEFITS_MESSAGE.giveawayGoods);
    }
    Console.print(EMPTY_LINE);
  },

  printBenefits(date, sumAmount, orderedCategories) {
    Console.print(BENEFITS_MESSAGE.benefits);
    if (sumAmount < 10000) {
      Console.print(NOTHING_CONVENTION);
    }
    if (sumAmount >= 10000) {
      // TODO: 여기에 date를 활용해서 혜택 목록 구현
      // 크리스마스 조건문
      const christmasDiscountAmount =
        eventCheckManager.checkChristmasDiscountAmount(date);
      if (christmasDiscountAmount !== 0 && !isNaN(christmasDiscountAmount)) {
        Console.print(
          `${EVENT_NAME.christmas}: -${makeNumberToKoreaMoney(
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
      if (weekdaysDiscountAmount !== 0 && !isNaN(weekdaysDiscountAmount)) {
        Console.print(
          `${EVENT_NAME.weekdays}: -${makeNumberToKoreaMoney(
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
      if (weekendsDiscountAmount !== 0 && !isNaN(weekendsDiscountAmount)) {
        Console.print(
          `${EVENT_NAME.weekends}: -${makeNumberToKoreaMoney(
            weekendsDiscountAmount
          )}`
        );
      }
      // 특별 조건문
      const specialDiscountAmount =
        eventCheckManager.checkSpecialEventDiscountAmount(date);
      if (specialDiscountAmount !== 0) {
        Console.print(
          `${EVENT_NAME.special}: -${makeNumberToKoreaMoney(
            specialDiscountAmount
          )}`
        );
      }
      // 증정 조건문
      const giveawayDiscountAmount =
        eventCheckManager.checkGiveawayEventDiscountAmount(sumAmount);
      if (giveawayDiscountAmount !== 0) {
        Console.print(
          `${EVENT_NAME.giveaway}: -${makeNumberToKoreaMoney(
            giveawayDiscountAmount
          )}`
        );
      }

      // 여기에 혜택금액 합과 증정 혜택금액을 return
      const totalBenefits =
        christmasDiscountAmount +
        weekdaysDiscountAmount +
        weekendsDiscountAmount +
        specialDiscountAmount;
      const totalBenefitsPrice = {
        total: totalBenefits,
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
    if (typeof totalBenefitsPrice === "object") {
      const total = totalBenefitsPrice.total + totalBenefitsPrice.giveaway;
      Console.print(`-${makeNumberToKoreaMoney(total)}`);
    } else {
      Console.print(NOTHING_CONVENTION);
    }
    Console.print(EMPTY_LINE);
  },

  printPriceAfterDiscount(priceBeforeDiscount, totalBenefitsPrice) {
    Console.print(BENEFITS_MESSAGE.priceAfterDiscount);
    if (typeof totalBenefitsPrice === "object") {
      Console.print(
        `${makeNumberToKoreaMoney(
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
    if (typeof totalBenefitsPrice === "object" && totalBenefits >= 5000) {
      if (totalBenefits >= 20000) {
        Console.print("산타");
      } else if (totalBenefits >= 10000) {
        Console.print("트리");
      } else if (totalBenefits >= 5000) {
        Console.print("별");
      }
    } else {
      Console.print(NOTHING_CONVENTION);
    }
    Console.print(EMPTY_LINE);
  },
};

export default OutputView;
