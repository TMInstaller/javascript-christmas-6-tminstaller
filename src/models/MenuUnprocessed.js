import { DIVIDE_CONVENTION } from "../constants/convention";
import { checkIsEmpty, checkIsIncluded } from "../utils/condition";
import { divideData } from "../utils/conversion";

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
