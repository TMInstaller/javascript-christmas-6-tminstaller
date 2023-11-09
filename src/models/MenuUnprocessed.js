import { DIVIDE_CONVENTION } from "../constants/convention.js";
import { checkIsEmpty, checkIsIncluded } from "../utils/condition.js";
import { divideData } from "../utils/conversion.js";

export class MenuUnprocessed {
  #stringData;

  constructor(stringData) {
    this.#stringData = stringData;
    this.#isDataEmpty(stringData);
    this.#isDataHasCorrectStructure(stringData);
  }

  #isDataEmpty(stringData) {
    checkIsEmpty(stringData);
  }

  #isDataHasCorrectStructure(stringData) {
    const items = divideData(stringData, DIVIDE_CONVENTION.menu);
    for (const item of items) {
      checkIsIncluded(item, DIVIDE_CONVENTION.nameAndCount);
    }
  }
}
