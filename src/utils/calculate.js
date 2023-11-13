export const sumArray = (array) => {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};
