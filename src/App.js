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

    OutputView.printResults(resultsData);
  }
}

export default App;
