import OutputView from "../OutputView.js";
import { ERROR_MESSAGE } from "../constants/error.js";
import { EVENT } from "../constants/number.js";
import { ThrowManager } from "../managers/ThrowManager.js";
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
    if (checkIsEmpty(stringData)) {
      ThrowManager.emptyError();
    }
  }

  #isDataNumber(stringData) {
    try {
      if (checkIsNumber(stringData)) {
        ThrowManager.numberError(ERROR_MESSAGE.isInvalidDate);
      }
    } catch (error) {
      OutputView.printError(error.message);
    }
  }

  #isDataUnderMinimum(stringData) {
    const [data, minNumber] = [stringToNumber(stringData), EVENT.startDate];
    if (checkIsUnderMinimum(data, minNumber)) {
      ThrowManager.underMinimumError();
    }
  }

  #isDataOverMaximum(stringData) {
    const [data, maxNumber] = [stringToNumber(stringData), EVENT.endDate];
    if (checkIsOverMaximum(data, maxNumber)) {
      ThrowManager.overMaximumError();
    }
  }

  #isDataInteger(stringData) {
    if (checkIsInteger(stringToNumber(stringData))) {
      ThrowManager.integerError();
    }
  }
}
