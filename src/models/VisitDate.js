import OutputView from "../OutputView.js";
import { ERROR_MESSAGE } from "../constants/error.js";
import { EVENT } from "../constants/number.js";
import {
  checkIsEmpty,
  checkIsInteger,
  checkIsOverMaximum,
  checkIsUnderMinimum,
  checkIsNumber,
} from "../utils/condition.js";
import { stringToNumber } from "../utils/conversion.js";

export class VisitDate {
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
      checkIsNumber(stringData, ERROR_MESSAGE.isInvalidDate);
    } catch (error) {
      OutputView.printError(error.message);
    }
  }

  #isDataUnderMinimum(stringData) {
    checkIsUnderMinimum(stringToNumber(stringData), EVENT.startDate);
  }

  #isDataOverMaximum(stringData) {
    checkIsOverMaximum(stringToNumber(stringData), EVENT.endDate);
  }

  #isDataInteger(stringData) {
    checkIsInteger(stringToNumber(stringData));
  }
}
