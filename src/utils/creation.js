import { PRICE } from "../constants/number.js";
import { FULL_MENU } from "../constants/word.js";
import { increaseOrMaintain } from "./update.js";

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

export const createCategoryCounts = (orderedMenu, matrixOrderedMenu) => {
  const categoryCounts = {};
  for (const [itemName, quantity] of orderedMenu) {
    const itemEntry = matrixOrderedMenu.find(
      ([_, koreanName]) => koreanName === itemName
    );
    if (itemEntry) {
      const category = itemEntry[0];
      increaseOrMaintain(categoryCounts[category], quantity);
    }
  }
  return categoryCounts;
};
