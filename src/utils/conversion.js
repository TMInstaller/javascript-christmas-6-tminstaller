export const stringToNumber = (stringData) => {
  return Number(stringData);
};

export const divideData = (stringData, divisor) => {
  return stringData.split(divisor);
};

export const makeObjectValuesToArray = (objectData) => {
  return Object.values(objectData).flatMap((value) => Object.values(value));
};
