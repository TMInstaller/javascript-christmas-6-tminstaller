import { FULL_MENU } from "../constants/word.js";
import { checkIsEmpty, checkIsIncluded } from "../utils/condition.js";
import { makeObjectValuesToArray } from "../utils/conversion.js";

export class MenuName {
  #stringData;

  constructor(stringData) {
    this.#stringData = stringData;
    this.#isDataEmpty(stringData);
    this.#isDataIncludedInMenu(stringData);
  }

  // 입력받은 값이 존재하는지 확인
  #isDataEmpty(stringData) {
    checkIsEmpty(stringData);
  }

  // 실제 존재하는 메뉴이름인지 확인
  #isDataIncludedInMenu(stringData) {
    const menuList = makeObjectValuesToArray(FULL_MENU);
    checkIsIncluded(menuList, stringData);
  }
}
