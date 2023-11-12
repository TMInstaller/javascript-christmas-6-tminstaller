import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/message.js";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import { EventCheckManager } from "./managers/EventCheckManager.js";

class App {
  constructor() {
    this.eventCheckManager = new EventCheckManager();
  }

  async run() {
    Console.print(INPUT_MESSAGE.introducePlanner);
    const dateToVisit = await InputView.readVisitDate();
    const orderedMenu = await InputView.readMenu();
    const amountBeforeDiscount =
      this.eventCheckManager.isTotalAmountOverMinimum(orderedMenu);
    const orderedCategories =
      this.eventCheckManager.checkHowManyMenuInCategory(orderedMenu);
    OutputView.printOrderedMenu(orderedMenu);
    OutputView.printPriceBeforeDiscount(amountBeforeDiscount);
    OutputView.printSatisfiedGiveAwayMenu(amountBeforeDiscount);
    const totalBenefitsPrice = OutputView.printBenefits(
      dateToVisit,
      amountBeforeDiscount,
      orderedCategories
    );
    OutputView.printTotalBenefitsPrice(totalBenefitsPrice);
    OutputView.printPriceAfterDiscount(
      amountBeforeDiscount,
      totalBenefitsPrice
    );
    OutputView.printSatisfiedEventBadge(totalBenefitsPrice);
  }
}

export default App;
