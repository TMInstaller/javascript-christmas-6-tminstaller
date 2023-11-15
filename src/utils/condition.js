// self-feedback: 이 파일에 있는 두 종류의 함수들을 에러를 출력하는 객체로 분리하는게 더 좋았을까?
import { ERROR_MESSAGE } from "../constants/error.js";

export const checkIsEmpty = (data) => {
  if (!data?.trim().length) {
    throw new Error(ERROR_MESSAGE.isEmpty);
  }
};
export const checkIsInteger = (data) => {
  if (!Number.isInteger(data)) {
    throw new Error(ERROR_MESSAGE.isNotInteger);
  }
};
export const checkIsNumber = (data, errMessage) => {
  if (isNaN(data) || data === null) {
    throw new Error(errMessage);
  }
};
export const checkIsOverMaximum = (data, maxNumber) => {
  if (data > maxNumber) {
    throw new Error(ERROR_MESSAGE.isOverMaximum);
  }
};
export const checkIsUnderMinimum = (data, minNumber) => {
  if (data < minNumber) {
    throw new Error(ERROR_MESSAGE.isUnderMinimum);
  }
};
export const checkIsIncluded = (data, element) => {
  if (!data?.includes(element)) {
    throw new Error(ERROR_MESSAGE.isInvalidInput);
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
