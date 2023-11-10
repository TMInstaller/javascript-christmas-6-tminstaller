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
