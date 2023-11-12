import { PRICE } from "../constants/number.js";
import { FULL_MENU } from "../constants/word.js";

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

export const makeMatrixOrderedMenu = () => {
  // 한글 이름, 영어 이름, 가격을 포함하는 2차원 배열 생성
  const matrixOrderedMenu = [];
  Object.entries(FULL_MENU).forEach(([category, items]) => {
    Object.entries(items).forEach(([key, koreanName]) => {
      const price = PRICE[key];
      matrixOrderedMenu.push([category, koreanName, key, price]);
    });
  });
  return matrixOrderedMenu;
};

export const makeNumberToKoreaMoney = (numberData) => {
  return new Intl.NumberFormat("ko-KR").format(numberData) + "원";
};
