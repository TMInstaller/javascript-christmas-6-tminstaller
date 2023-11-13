import { Console } from "@woowacourse/mission-utils";
import { EMPTY_LINE, INPUT_MESSAGE } from "./constants/message.js";
import OutputView from "./OutputView.js";
import { stringToNumber } from "./utils/conversion.js";
import { VisitDate } from "./models/VisitDate.js";
import { ConvertManager } from "./managers/ConvertManager.js";
import { ValidateManager } from "./managers/ValidateManager.js";
import { RepeatManager } from "./managers/RepeatManager.js";

const convertManager = new ConvertManager();
const validateManager = new ValidateManager();
const repeatManager = new RepeatManager();

const InputView = {
  async readVisitDate() {
    while (true) {
      try {
        Console.print(INPUT_MESSAGE.askWhenToVisit);
        const visitDate = await Console.readLineAsync(EMPTY_LINE);
        new VisitDate(visitDate);
        const visitDateToNumber = stringToNumber(visitDate);
        return visitDateToNumber;
      } catch (error) {
        OutputView.printError(error);
      }
    }
  },
  async readMenu() {
    while (true) {
      try {
        Console.print(INPUT_MESSAGE.askMenuToOrder);
        const menuUnprocessed = await Console.readLineAsync(EMPTY_LINE);
        validateManager.menuIsNotArrayYet(menuUnprocessed);
        const menuMatrix = convertManager.menuToMatrix(menuUnprocessed);
        repeatManager.validateMenuAndConvert(menuMatrix);
        validateManager.menuMatrix(menuMatrix);
        OutputView.printDivideSection();
        return menuMatrix;
      } catch (error) {
        OutputView.printError(error);
      }
    }
  },
  async readInputs() {
    const dateToVisit = await this.readVisitDate();
    const orderedMenu = await this.readMenu();
    return { dateToVisit, orderedMenu };
  },
};

export default InputView;
