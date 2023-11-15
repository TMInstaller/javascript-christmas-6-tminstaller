import { COUNT_CONVENTION } from "../constants/convention.js";

export const stringToNumber = (stringData) => {
  return Number(stringData);
};

export const divideData = (stringData, divisor) => {
  return stringData.split(divisor);
};

// 깊이 상관없이 모든 객체의 값들을 하나의 배열에 넣기위해 사용
export const makeObjectValuesToArrayFlat = (objectData) => {
  return Object.values(objectData).flatMap((value) => Object.values(value));
};

export const makeObjectValuesToArray = (objectData) => {
  return Object.values(objectData);
};

export const makeObjectToArray = (objectData) => {
  return Object.keys(objectData).map((key) => [key, objectData[key]]);
};

export const convertNumberToKoreaMoney = (numberData) => {
  return new Intl.NumberFormat("ko-KR").format(numberData) + "원";
};

// 사용되는 상황: [[<String>, <Number>], [...]]의 상황에서 사용
export const convertMatrixItemToFormattedString = (matrixItem) => {
  return matrixItem
    .map(
      ([arrayItem, quantity]) => `${arrayItem} ${quantity}${COUNT_CONVENTION}`
    )
    .join("\n");
};
