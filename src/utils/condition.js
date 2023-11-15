import { ThrowManager } from "../managers/ThrowManager.js";

export const checkIsEmpty = (data) => {
  if (!data?.trim().length) {
    ThrowManager.emptyError();
  }
};
export const checkIsInteger = (data) => {
  if (!Number.isInteger(data)) {
    ThrowManager.integerError();
  }
};
export const checkIsNumber = (data, errMessage) => {
  if (isNaN(data) || data === null) {
    ThrowManager.numberError(errMessage);
  }
};
export const checkIsOverMaximum = (data, maxNumber) => {
  if (data > maxNumber) {
    ThrowManager.overMaximumError();
  }
};
export const checkIsUnderMinimum = (data, minNumber) => {
  if (data < minNumber) {
    ThrowManager.underMinimumError();
  }
};
export const checkIsIncluded = (data, element) => {
  if (!data?.includes(element)) {
    ThrowManager.includedError();
  }
};

export const checkIsPositiveNumber = (data) => {
  return data !== 0 && !isNaN(data) && data > 0;
};
export const checkIsNotZero = (data) => {
  return data !== 0;
};
export const checkIsTypeObject = (data) => {
  return typeof data === "object" && data !== null;
};
export const checkIsUnder = (data, value) => {
  return data < value;
};
export const checkIsOver = (data, value) => {
  return data >= value;
};
