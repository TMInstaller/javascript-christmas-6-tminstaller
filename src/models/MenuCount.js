import OutputView from "../OutputView.js";
import { ERROR_MESSAGE } from "../constants/error.js";
import { MENU_COUNT } from "../constants/number.js";
import {
  checkIsEmpty,
  checkIsInteger,
  checkIsOverMaximum,
  checkIsUnderMinimum,
  checkIsNumber,
} from "../utils/condition.js";
import { stringToNumber } from "../utils/conversion.js";

export class MenuCount {
  #stringData;

  constructor(stringData) {
    this.#stringData = stringData;
    this.#isDataEmpty(stringData);
    this.#isDataNumber(stringData);
    this.#isDataUnderMinimum(stringData);
    this.#isDataOverMaximum(stringData);
    this.#isDataInteger(stringData);
  }

  #isDataEmpty(stringData) {
    checkIsEmpty(stringData);
  }

  #isDataNumber(stringData) {
    try {
      checkIsNumber(stringData, ERROR_MESSAGE.isInvalidOrder);
    } catch (error) {
      OutputView.printError(error.message);
    }
  }

  #isDataUnderMinimum(stringData) {
    checkIsUnderMinimum(stringToNumber(stringData), MENU_COUNT.minimum);
  }

  #isDataOverMaximum(stringData) {
    checkIsOverMaximum(stringToNumber(stringData), MENU_COUNT.maximun);
  }

  #isDataInteger(stringData) {
    checkIsInteger(stringToNumber(stringData));
  }
}
