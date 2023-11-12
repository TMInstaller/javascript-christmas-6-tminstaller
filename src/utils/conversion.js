import { COUNT_CONVENTION } from "../constants/convention.js";

export const stringToNumber = (stringData) => {
  return Number(stringData);
};

export const divideData = (stringData, divisor) => {
  return stringData.split(divisor);
};

export const makeObjectValuesToArrayFlat = (objectData) => {
  return Object.values(objectData).flatMap((value) => Object.values(value));
};

export const makeObjectValuesToArray = (objectData) => {
  return Object.values(objectData);
};

export const makeObjectToArray = (objectData) => {
  return Object.values(objectData).flatMap((category) =>
    Object.entries(category).flatMap(([key, value]) => [[key, value]])
  );
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
