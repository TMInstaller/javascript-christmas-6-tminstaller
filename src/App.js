import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import { EventCheckManager } from "./managers/EventCheckManager.js";
import { DiscountCalculator } from "./calculators/DiscountCalculator.js";

class App {
  constructor() {
    this.eventCheckManager = new EventCheckManager();
    this.discountCalculator = new DiscountCalculator();
  }

  async run() {
    OutputView.printStartMessage();
    const { dateToVisit, orderedMenu } = await InputView.readInputs();
    const { amountBeforeDiscount, orderedCategories } =
      this.discountCalculator.calculateDiscounts(orderedMenu);

    const resultsData = {
      orderedMenu,
      dateToVisit,
      amountBeforeDiscount,
      orderedCategories,
    };

    this.printResults(resultsData);
  }

  // TODO: 이 아래 OutputView.js로 이동
  printResults(resultsData) {
    this.printOrderDetails(resultsData);
    this.printBenefitsDetails(resultsData);
    this.printFinalResults(resultsData);
  }

  printOrderDetails({ orderedMenu, amountBeforeDiscount }) {
    OutputView.printOrderedMenu(orderedMenu);
    OutputView.printPriceBeforeDiscount(amountBeforeDiscount);
    OutputView.printSatisfiedGiveAwayMenu(amountBeforeDiscount);
  }

  printBenefitsDetails({
    dateToVisit,
    amountBeforeDiscount,
    orderedCategories,
  }) {
    const totalBenefitsPrice = OutputView.printBenefits(
      dateToVisit,
      amountBeforeDiscount,
      orderedCategories
    );
    this.totalBenefitsPrice = totalBenefitsPrice; // 저장하여 다음 단계에서 사용
  }

  printFinalResults({ amountBeforeDiscount }) {
    OutputView.printTotalBenefitsPrice(this.totalBenefitsPrice);
    OutputView.printPriceAfterDiscount(
      amountBeforeDiscount,
      this.totalBenefitsPrice
    );
    OutputView.printSatisfiedEventBadge(this.totalBenefitsPrice);
  }
}

export default App;
