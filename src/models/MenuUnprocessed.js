import { DIVIDE_CONVENTION } from "../constants/convention.js";
import { ThrowManager } from "../managers/ThrowManager.js";
import { checkIsEmpty, checkIsIncluded } from "../utils/condition.js";
import { divideData } from "../utils/conversion.js";

// 입력값, "메뉴1-2,메뉴2-4,메뉴3-7"의 형식으로 들어온다
export class MenuUnprocessed {
  #stringData;

  constructor(stringData) {
    this.#stringData = stringData;
    this.#isDataEmpty(stringData);
    this.#isDataHasCorrectStructure(stringData);
  }

  #isDataEmpty(stringData) {
    if (checkIsEmpty(stringData)) {
      ThrowManager.emptyError();
    }
  }

  #isDataHasCorrectStructure(stringData) {
    const items = divideData(stringData, DIVIDE_CONVENTION.menu);
    for (const item of items) {
      if (checkIsIncluded(item, DIVIDE_CONVENTION.nameAndCount)) {
        ThrowManager.includedError();
      }
    }
  }
}
