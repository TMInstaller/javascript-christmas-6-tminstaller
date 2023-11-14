export const increaseOrMaintain = (value, numberData) => {
  if (value) {
    return value + numberData;
  } else {
    return numberData;
  }
};
