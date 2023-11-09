import { ERROR_CONVENTION } from "./convention.js";

export const ERROR_MESSAGE = Object.freeze({
  isNotNumber: `${ERROR_CONVENTION} 입력받은 값이 숫자가 아닙니다.`,
  isUnderMinimum: `${ERROR_CONVENTION} 최솟값 이상의 값을 입력해 주세요.`,
  isOverMaximum: `${ERROR_CONVENTION} 최댓값 이상의 값을 입력하셨습니다.`,
  isNotInteger: `${ERROR_CONVENTION} 입력받은 값이 정수가 아닙니다.`,
});
