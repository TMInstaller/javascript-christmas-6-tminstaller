import { ERROR_CONVENTION } from "./convention.js";

export const ERROR_MESSAGE = Object.freeze({
  isEmpty: `${ERROR_CONVENTION} 입력받은 값이 존재하지 않습니다.`,
  isNotNumber: `${ERROR_CONVENTION} 입력받은 값이 숫자가 아닙니다.`,
  isUnderMinimum: `${ERROR_CONVENTION} 최솟값 이상의 값을 입력해 주세요.`,
  isOverMaximum: `${ERROR_CONVENTION} 최댓값 이상의 값을 입력하셨습니다.`,
  isNotInteger: `${ERROR_CONVENTION} 입력받은 값이 정수가 아닙니다.`,
  isInvalidInput: `${ERROR_CONVENTION} 기댓값에 포함되어야 하는 값이 들어있지 않습니다.`,
  isDuplicated: `${ERROR_CONVENTION} 중복되는 값이 존재합니다.`,
  isInvalidOrder: `${ERROR_CONVENTION} 유효하지 않은 주문입니다. 다시 입력해 주세요.`,
  isInvalidDate: `${ERROR_CONVENTION} 유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
});
