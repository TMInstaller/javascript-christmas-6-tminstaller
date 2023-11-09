import { ERROR_MESSAGE } from "../constants/error.js";

export const checkIsEmpty = (data) => {
  if (!data.trim().length) {
    throw new Error(ERROR_MESSAGE.isEmpty);
  }
};

export const checkIsNumber = (data) => {
  if (isNaN(data)) {
    throw new Error(ERROR_MESSAGE.isNotNumber);
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
