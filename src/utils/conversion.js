import { DIVIDE_CONVENTION } from "../constants/convention";

export const stringToNumber = (stringData) => {
  return Number(stringData);
};

export const divideData = (stringData, divisor) => {
  return stringData.split(divisor);
};
