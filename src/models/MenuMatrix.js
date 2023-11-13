import { ERROR_MESSAGE } from "../constants/error.js";
import { MENU_COUNT, PRICE } from "../constants/number.js";
import { BEVERAGE, FULL_MENU } from "../constants/word.js";
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
        throw new Error(ERROR_MESSAGE.isDuplicated);
      }
      checkDuplicateSet.add(arrayData[0]);
    }
  }

  #isMatrixHasOnlyBeverages(matrixData) {
    // 음료가 가지고 있는 이름들만 모아놓은 배열 생성
    const beveragesList = makeObjectValuesToArray(BEVERAGE);
    // 음료 안에 들어있지 않다면 return, 모든 순회를 마쳤다면 throw
    for (const arrayData of matrixData) {
      if (!beveragesList.includes(arrayData[0])) {
        return;
      }
    }
    throw new Error(ERROR_MESSAGE.isInvalidOrder);
  }
}
