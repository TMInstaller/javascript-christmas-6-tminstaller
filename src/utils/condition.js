import { ERROR_MESSAGE } from "../constants/error.js";

export const checkIsEmpty = (data) => {
  if (!data.trim().length) {
    throw new Error(ERROR_MESSAGE.isEmpty);
  }
};

export const checkIsNumber = (data, errMessage) => {
  if (isNaN(data)) {
    throw new Error(errMessage);
  }
};

export const checkIsUnderMinimum = (data, minNumber) => {
  if (data < minNumber) {
    throw new Error(ERROR_MESSAGE.isUnderMinimum);
  }
};

export const checkIsOverMaximum = (data, maxNumber) => {
  if (data > maxNumber) {
    throw new Error(ERROR_MESSAGE.isOverMaximum);
  }
};

export const checkIsInteger = (data) => {
  if (!Number.isInteger(data)) {
    throw new Error(ERROR_MESSAGE.isNotInteger);
  }
};

export const checkIsIncluded = (data, element) => {
  if (!data.includes(element)) {
    throw new Error(ERROR_MESSAGE.isInvalidInput);
  }
};

export const checkIsPositiveNumber = (data) => {
  return data !== 0 && !isNaN(data);
};

export const checkIsNotZero = (data) => {
  return data !== 0;
};

export const checkIsTypeObject = (data) => {
  return typeof data === "object";
};

export const checkIsUnder = (data, value) => {
  return data < value;
};

export const checkIsOver = (data, value) => {
  return data >= value;
};
