import { ERROR_MESSAGE } from "../constants/error.js";
import { MENU_COUNT } from "../constants/number.js";
import { BEVERAGE } from "../constants/word.js";
import { ThrowManager } from "../managers/ThrowManager.js";
import { checkIsOverMaximum } from "../utils/condition.js";
import { makeObjectValuesToArray } from "../utils/conversion.js";

export class MenuMatrix {
  #matrixData;

  constructor(matrixData) {
    this.#matrixData = matrixData;
    this.#isTotalCountOverMaximum(matrixData);
    this.#isMatrixHasDuplicates(matrixData);
    this.#isMatrixHasOnlyBeverages(matrixData);
  }

  #isTotalCountOverMaximum(matrixData) {
    let countAll = 0;
    for (const arrayData of matrixData) {
      countAll += arrayData[1];
    }
    checkIsOverMaximum(countAll, MENU_COUNT.maximun);
  }

  #isMatrixHasDuplicates(matrixData) {
    let checkDuplicateSet = new Set();
    for (const arrayData of matrixData) {
      if (checkDuplicateSet.has(arrayData[0])) {
        ThrowManager.duplicatedError();
      }
      checkDuplicateSet.add(arrayData[0]);
    }
  }

  #isMatrixHasOnlyBeverages(matrixData) {
    const beveragesList = makeObjectValuesToArray(BEVERAGE);
    for (const arrayData of matrixData) {
      if (!beveragesList.includes(arrayData[0])) {
        return;
      }
    }
    ThrowManager.invalidOrderError();
  }
}
