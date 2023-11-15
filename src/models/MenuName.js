import OutputView from "../OutputView.js";
import { FULL_MENU } from "../constants/word.js";
import { ThrowManager } from "../managers/ThrowManager.js";
import { checkIsEmpty, checkIsIncluded } from "../utils/condition.js";
import { makeObjectValuesToArrayFlat } from "../utils/conversion.js";

// "크리스마스파스타"와 같이 실제 메뉴에 있는 이름으로 들어온다
export class MenuName {
  #stringData;

  constructor(stringData) {
    this.#stringData = stringData;
    this.#isDataEmpty(stringData);
    this.#isDataIncludedInMenu(stringData);
  }

  #isDataEmpty(stringData) {
    try {
      if (checkIsEmpty(stringData)) {
        ThrowManager.emptyError();
      }
    } catch (error) {
      OutputView.printError(error.message);
    }
  }

  #isDataIncludedInMenu(stringData) {
    const menuList = makeObjectValuesToArrayFlat(FULL_MENU);
    if (checkIsIncluded(menuList, stringData)) {
      ThrowManager.includedError();
    }
  }
}
