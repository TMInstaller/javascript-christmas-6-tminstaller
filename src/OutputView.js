import { Console } from "@woowacourse/mission-utils";
import { BENEFITS_MESSAGE, EMPTY_LINE } from "./constants/message.js";
import { NOTHING_CONVENTION } from "./constants/convention.js";

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
        .map(([menuItem, quantity]) => `${menuItem} ${quantity}개`)
        .join("\n")
    );
    this.printDivideSection();
  },

  printPriceBeforeDiscount() {
    Console.print(BENEFITS_MESSAGE.priceBeforeDiscount);
    Console.print(NOTHING_CONVENTION);
    Console.print(EMPTY_LINE);
  },

  printSatisfiedGiveAwayMenu() {
    Console.print(BENEFITS_MESSAGE.giveawayMenu);
    Console.print(NOTHING_CONVENTION);
    Console.print(EMPTY_LINE);
  },

  printBenefits() {
    Console.print(BENEFITS_MESSAGE.benefits);
    Console.print(NOTHING_CONVENTION);
    Console.print(EMPTY_LINE);
  },

  printTotalBenefitsPrice() {
    Console.print(BENEFITS_MESSAGE.totalBenefitsPrice);
    Console.print(NOTHING_CONVENTION);
    Console.print(EMPTY_LINE);
  },

  printPriceAfterDiscount() {
    Console.print(BENEFITS_MESSAGE.priceAfterDiscount);
    Console.print(NOTHING_CONVENTION);
    Console.print(EMPTY_LINE);
  },

  printSatisfiedEventBadge() {
    Console.print(BENEFITS_MESSAGE.eventBadge);
    Console.print(NOTHING_CONVENTION);
    Console.print(EMPTY_LINE);
  },
};

export default OutputView;
