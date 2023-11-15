// self-feedback: 여기와 같이 특정 모델을 위한 기능만을 담고있는 파일은 객체로 만드는 것이 더 좋지 않을까?
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

// 다른 방법들도 있었지만, 찾는다는 의미의 find를 적었을 때
// 조금 더 직관적인 코드 이해가 가능할 것이라 생각하여 사용
export const createCategoryCounts = (orderedMenu, matrixOrderedMenu) => {
  const categoryCounts = {};
  for (const [itemName, quantity] of orderedMenu) {
    const itemEntry = matrixOrderedMenu.find(
      ([_, koreanName]) => koreanName === itemName
    );
    if (itemEntry) {
      const category = itemEntry[0];
      categoryCounts[category] = increaseOrMaintain(
        categoryCounts[category],
        quantity
      );
    }
  }
  return categoryCounts;
};
