import { ERROR_MESSAGE } from "../constants/error.js";

// 단순히 에러를 던지는 기능만을 관리하므로 static을 통해 초기화 과정 생략
export class ThrowManager {
  static duplicatedError() {
    throw new Error(ERROR_MESSAGE.isDuplicated);
  }

  static invalidOrderError() {
    throw new Error(ERROR_MESSAGE.isInvalidOrder);
  }

  static emptyError() {
    throw new Error(ERROR_MESSAGE.isEmpty);
  }

  static integerError() {
    throw new Error(ERROR_MESSAGE.isNotInteger);
  }

  static numberError(errMessage) {
    throw new Error(errMessage);
  }

  static overMaximumError() {
    throw new Error(ERROR_MESSAGE.isOverMaximum);
  }

  static underMinimumError() {
    throw new Error(ERROR_MESSAGE.isUnderMinimum);
  }

  static includedError() {
    throw new Error(ERROR_MESSAGE.isInvalidInput);
  }
}
