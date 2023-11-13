import {
  createCategoryCounts,
  makeMatrixOrderedMenu,
} from "../utils/creation.js";

export class EventCheckManager {
  // 배열 안에 들어있는 모든 메뉴의 가격 합이 10,000원을 넘지 않는지 확인
  isTotalAmountOverMinimum(matrixData) {
    const orderedMenu = makeMatrixOrderedMenu();
    // matrixData의 각 항목에 해당하는 가격을 찾아 합산
    let countAmount = 0;
    for (const [menuItem, quantity] of matrixData) {
      const priceInfo = orderedMenu.find(
        ([, koreanName]) => koreanName === menuItem
      );
      if (priceInfo) {
        const price = priceInfo[3];
        countAmount += price * quantity;
      }
    }
    return countAmount;
  }

  // 카테고리 별 주문한 메뉴의 개수를 반환하는 로직
  checkHowManyMenuInCategory(orderedMenu) {
    const menuMatrix = makeMatrixOrderedMenu();
    const categoryCounts = createCategoryCounts(orderedMenu, menuMatrix);
    return categoryCounts;
  }

  // 증정 이벤트 계산
  checkGiveawayEventDiscountAmount(priceBeforeDiscount) {
    if (priceBeforeDiscount >= 120000) {
      return 25000;
    }
    return 0;
  }

  // 배지 체크
  checkBadgeToTake(totalBenefits) {
    if (totalBenefits >= 20000) {
      return "산타";
    } else if (totalBenefits >= 10000) {
      return "트리";
    } else if (totalBenefits >= 5000) {
      return "별";
    }
  }
}
