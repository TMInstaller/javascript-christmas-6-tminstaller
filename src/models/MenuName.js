import { FULL_MENU } from "../constants/word.js";
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
    checkIsEmpty(stringData);
  }

  #isDataIncludedInMenu(stringData) {
    const menuList = makeObjectValuesToArrayFlat(FULL_MENU);
    checkIsIncluded(menuList, stringData);
  }
}
