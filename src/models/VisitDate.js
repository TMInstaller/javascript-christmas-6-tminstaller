import { EVENT_DAY } from "../constants/number.js";
import {
  checkIsEmpty,
  checkIsInteger,
  checkIsNumber,
  checkIsOverMaximum,
  checkIsUnderMinimum,
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
    checkIsNumber(stringData);
  }

  #isDataUnderMinimum(stringData) {
    checkIsUnderMinimum(stringToNumber(stringData), EVENT_DAY.startDate);
  }

  #isDataOverMaximum(stringData) {
    checkIsOverMaximum(stringToNumber(stringData), EVENT_DAY.endDate);
  }

  #isDataInteger(stringData) {
    checkIsInteger(stringToNumber(stringData));
  }
}
