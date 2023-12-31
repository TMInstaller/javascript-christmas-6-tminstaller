import { MENU_COUNT } from "../constants/number.js";
import { BEVERAGE } from "../constants/word.js";
import { ThrowManager } from "../managers/ThrowManager.js";
import { checkIsOverMaximum } from "../utils/condition.js";
import { makeObjectValuesToArray } from "../utils/conversion.js";

// [[시저샐러드,2],[해산물파스타,1],[레드와인-1]]처럼 2차원 배열이 들어온다
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
    if (checkIsOverMaximum(countAll, MENU_COUNT.maximun)) {
      ThrowManager.overMaximumError();
    }
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
