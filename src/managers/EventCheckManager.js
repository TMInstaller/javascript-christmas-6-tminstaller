import { makeMatrixOrderedMenu } from "../utils/conversion.js";

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

  // 이벤트가 적용될 지 확인해보는 로직, 인자로 sumAmount를 쓸 것
  checkIsEventValid() {}

  // 크리스마스 전까지 올라가는 할인금액에 계산
  checkChristmasDiscountAmount(visitDate) {
    // 1일에 1000원으로 시작해서 25일에 3400원까지 올라가야 함
    if (visitDate < 26) {
      return 1000 + (visitDate - 1) * 100;
    }
    return 0;
  }

  // 카테고리 별 주문한 메뉴의 개수를 반환하는 로직
  checkHowManyMenuInCategory(orderedMenu) {
    const menuMatrix = makeMatrixOrderedMenu();
    const categoryCounts = {};
    for (const [itemName, quantity] of orderedMenu) {
      // menuMatrix에서 아이템을 찾아 그 카테고리를 확인
      const itemEntry = menuMatrix.find(
        ([_, koreanName]) => koreanName === itemName
      );
      if (itemEntry) {
        const category = itemEntry[0];

        // 카테고리별 수량을 업데이트
        if (categoryCounts[category]) {
          categoryCounts[category] += quantity;
        } else {
          categoryCounts[category] = quantity;
        }
      }
    }
    return categoryCounts;
  }

  // 평일 할인(일,월,화,수,목)금액 계산
  checkWeekDaysEventDiscountAmount(visitDate, orderedCategories) {
    // 일, 월, 화, 수, 목요일이라면 주문한 디저트 하나 당 2023원 할인
    const weekDays = [
      4, 5, 6, 7, 11, 12, 13, 14, 18, 19, 20, 21, 25, 26, 27, 28,
    ];
    if (weekDays.includes(visitDate) && !isNaN(orderedCategories.DESSERT)) {
      return 2023 * orderedCategories.DESSERT;
    }
    return 0;
  }

  // 주말 할인(금,토)금액 계산
  checkWeekendEventDiscountAmount(visitDate, orderedCategories) {
    // 금, 토요일이라면 주문한 이벤트 달력에 별이 있다면 주문한 메인 메뉴 하나 당 2023원 할인
    const specialDays = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];
    if (specialDays.includes(visitDate) && !isNaN(orderedCategories.MAIN)) {
      return 2023 * orderedCategories.MAIN;
    }
    return 0;
  }

  // 특별 할인 계산
  checkSpecialEventDiscountAmount(visitDate) {
    // 이벤트 달력에 별이 있다면 총주문 금액에서 1000원 할인
    const specialDays = [3, 10, 17, 24, 25, 31];
    if (specialDays.includes(visitDate)) {
      return 1000;
    }
    return 0;
  }

  // 증정 이벤트 계산
  checkGiveawayEventDiscountAmount(priceBeforeDiscount) {
    if (priceBeforeDiscount >= 120000) {
      return 25000;
    }
    return 0;
  }
}
