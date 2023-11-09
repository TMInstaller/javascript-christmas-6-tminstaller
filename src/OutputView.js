import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printMenu() {
    Console.print("<주문 메뉴>");
    // ...
  },
  printError(error) {
    Console.print(error);
  },
};

export default OutputView;
