import OutputView from "../OutputView.js";
import { FULL_MENU } from "../constants/word.js";
import { ThrowManager } from "../managers/ThrowManager.js";
import { checkIsEmpty, checkIsIncluded } from "../utils/condition.js";
import { makeObjectValuesToArrayFlat } from "../utils/conversion.js";

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
