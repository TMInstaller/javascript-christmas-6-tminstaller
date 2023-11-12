import { Console } from "@woowacourse/mission-utils";
import { EMPTY_LINE, INPUT_MESSAGE } from "./constants/message.js";
import OutputView from "./OutputView.js";
import { divideData, stringToNumber } from "./utils/conversion.js";
import { VisitDate } from "./models/VisitDate.js";
import { MenuUnprocessed } from "./models/MenuUnprocessed.js";
import { DIVIDE_CONVENTION } from "./constants/convention.js";
import { MenuMatrix } from "./models/MenuMatrix.js";
import { MenuCount } from "./models/MenuCount.js";
import { MenuName } from "./models/MenuName.js";

const InputView = {
  async readVisitDate() {
    while (true) {
      try {
        Console.print(INPUT_MESSAGE.askWhenToVisit);
        const visitDate = await Console.readLineAsync(EMPTY_LINE);
        new VisitDate(visitDate);

        // 이후 숫자로 변환
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
        new MenuUnprocessed(menuUnprocessed);
        const menuArray = divideData(menuUnprocessed, DIVIDE_CONVENTION.menu);
        const menuMatrix = menuArray.map((item) =>
          divideData(item, DIVIDE_CONVENTION.nameAndCount)
        );
        for (const menu of menuMatrix) {
          new MenuName(menu[0]);
          new MenuCount(menu[1]);
          menu[1] = stringToNumber(menu[1]);
        }
        new MenuMatrix(menuMatrix);
        OutputView.printDivideSection();
        return menuMatrix;
      } catch (error) {
        OutputView.printError(error);
      }
    }
  },
};

export default InputView;
