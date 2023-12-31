export const checkIsEmpty = (data) => {
  return !data?.trim().length;
};
export const checkIsInteger = (data) => {
  return !Number.isInteger(data);
};
export const checkIsNumber = (data) => {
  return isNaN(data) || data === null;
};
export const checkIsOverMaximum = (data, maxNumber) => {
  return data > maxNumber;
};
export const checkIsUnderMinimum = (data, minNumber) => {
  return data < minNumber;
};
export const checkIsIncluded = (data, element) => {
  return !data?.includes(element);
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
