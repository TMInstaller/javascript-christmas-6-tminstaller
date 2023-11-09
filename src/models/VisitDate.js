import { ERROR_MESSAGE } from "../constants/error.js";
import { EVENT_DAY } from "../constants/number.js";
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
    if (!stringData.trim().length) {
      throw new Error(ERROR_MESSAGE.isEmpty);
    }
  }

  #isDataNumber(stringData) {
    if (isNaN(stringData)) {
      throw new Error(ERROR_MESSAGE.isNotNumber);
    }
  }

  #isDataUnderMinimum(stringData) {
    if (stringToNumber(stringData) < EVENT_DAY.startDate) {
      throw new Error(ERROR_MESSAGE.isUnderMinimum);
    }
  }

  #isDataOverMaximum(stringData) {
    if (stringToNumber(stringData) > EVENT_DAY.endDate) {
      throw new Error(ERROR_MESSAGE.isOverMaximum);
    }
  }

  #isDataInteger(stringData) {
    if (!Number.isInteger(stringToNumber(stringData))) {
      throw new Error(ERROR_MESSAGE.isNotInteger);
    }
  }
}
