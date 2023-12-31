import { COUNT_CONVENTION } from "./convention.js";
import { GIVEAWAY_COUNT } from "./number.js";
import { BEVERAGE } from "./word.js";

export const INPUT_MESSAGE = Object.freeze({
  introducePlanner: `안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.`,
  askWhenToVisit: `12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)`,
  askMenuToOrder: `주문하실 메뉴를 메뉴와 개수를 알려주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)`,
});

export const BENEFITS_MESSAGE = Object.freeze({
  introducePreview: `12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  orderedMenu: `<주문 메뉴>`,
  priceBeforeDiscount: `<할인 전 총주문 금액>`,
  giveawayMenu: `<증정 메뉴>`,
  giveawayGoods: `${BEVERAGE.champagne} ${GIVEAWAY_COUNT}${COUNT_CONVENTION}`,
  benefits: `<혜택 내역>`,
  totalBenefitsPrice: `<총혜택 금액>`,
  priceAfterDiscount: `<할인 후 예상 결제 금액>`,
  eventBadge: `<12월 이벤트 배지>`,
});

export const CONDITION_MESSAGE = Object.freeze({
  none: `없음`,
});

export const EMPTY_LINE = "";
