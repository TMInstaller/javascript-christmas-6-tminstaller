import { ERROR_CONVENTION } from "../../src/constants/convention";
import {
  checkIsEmpty,
  checkIsInteger,
  checkIsNumber,
  checkIsOverMaximum,
  checkIsUnderMinimum,
  checkIsIncluded,
  checkIsPositiveNumber,
  checkIsNotZero,
  checkIsTypeObject,
  checkIsUnder,
  checkIsOver,
} from "../../src/utils/condition";

describe("checkIsEmpty 함수 테스트", () => {
  test("빈 문자열이 입력되면 true를 반환한다", () => {
    expect(checkIsEmpty("")).toBe(true);
  });

  test("공백만 있는 문자열이 입력되면 true를 반환한다", () => {
    expect(checkIsEmpty("   ")).toBe(true);
  });

  test("정상적인 문자열이 입력되면 false를 반환한다", () => {
    expect(checkIsEmpty("Hello World")).toBe(false);
  });

  test("null이 입력되면 true를 반환한다", () => {
    expect(checkIsEmpty(null)).toBe(true);
  });

  test("undefined가 입력되면 true를 반환한다", () => {
    expect(checkIsEmpty(undefined)).toBe(true);
  });
});

describe("checkIsInteger 함수 테스트", () => {
  test("정수가 입력되면 false를 반환한다", () => {
    expect(checkIsInteger(10)).toBe(false);
  });

  test("소수가 입력되면 true를 반환한다", () => {
    expect(checkIsInteger(10.5)).toBe(true);
  });

  test("숫자가 아닌 값이 입력되면 true를 반환한다", () => {
    expect(checkIsInteger("abc")).toBe(true);
    expect(checkIsInteger({})).toBe(true);
  });

  test("null이 입력되면 true를 반환한다", () => {
    expect(checkIsInteger(null)).toBe(true);
  });

  test("undefined가 입력되면 true를 반환한다", () => {
    expect(checkIsInteger(undefined)).toBe(true);
  });
});

describe("checkIsNumber 함수 테스트", () => {
  test("숫자 형태의 문자열이 입력되면 false를 반환한다", () => {
    expect(checkIsNumber("123")).toBe(false);
  });

  test("숫자가 입력되면 false를 반환한다", () => {
    expect(checkIsNumber(123)).toBe(false);
  });

  test("숫자가 아닌 문자열이 입력되면 true를 반환한다", () => {
    expect(checkIsNumber("abc")).toBe(true);
  });

  test("null이 입력되면 true를 반환한다", () => {
    expect(checkIsNumber(null)).toBe(true);
  });

  test("undefined가 입력되면 true를 반환한다", () => {
    expect(checkIsNumber(undefined)).toBe(true);
  });
});

describe("checkIsOverMaximum 함수 테스트", () => {
  const maxNumber = 10;

  test("data가 maxNumber보다 크면 true를 반환한다", () => {
    expect(checkIsOverMaximum(15, maxNumber)).toBe(true);
  });

  test("data가 maxNumber와 같으면 false를 반환한다", () => {
    expect(checkIsOverMaximum(10, maxNumber)).toBe(false);
  });

  test("data가 maxNumber보다 작으면 false를 반환한다", () => {
    expect(checkIsOverMaximum(5, maxNumber)).toBe(false);
  });
});

describe("checkIsUnderMinimum 함수 테스트", () => {
  const minimumNumber = 10;

  test("data가 minNumber보다 작으면 true를 반환한다", () => {
    expect(checkIsUnderMinimum(5, minimumNumber)).toBe(true);
  });

  test("data가 minNumber와 같으면 false를 반환한다", () => {
    expect(checkIsUnderMinimum(10, minimumNumber)).toBe(false);
  });

  test("data가 minNumber보다 크면 false를 반환한다", () => {
    expect(checkIsUnderMinimum(15, minimumNumber)).toBe(false);
  });
});

describe("checkIsIncluded 함수 테스트", () => {
  const array = [1, 2, 3, 4, 5];

  test("배열에 요소가 포함되어 있으면 false를 반환한다", () => {
    expect(checkIsIncluded(array, 3)).toBe(false);
  });

  test("배열에 요소가 포함되어 있지 않으면 true를 반환한다", () => {
    expect(checkIsIncluded(array, 6)).toBe(true);
  });

  test("data가 배열이 아니면 true를 반환한다", () => {
    expect(checkIsIncluded("not an array", 1)).toBe(true);
    expect(checkIsIncluded(null, 1)).toBe(true);
    expect(checkIsIncluded(undefined, 1)).toBe(true);
  });
});

describe("checkIsPositiveNumber 함수 테스트", () => {
  test("양수에 대해 true를 반환한다", () => {
    expect(checkIsPositiveNumber(5)).toBe(true);
  });

  test("0에 대해 false를 반환한다", () => {
    expect(checkIsPositiveNumber(0)).toBe(false);
  });

  test("음수에 대해 false를 반환한다", () => {
    expect(checkIsPositiveNumber(-5)).toBe(false);
  });

  test("NaN에 대해 false를 반환한다", () => {
    expect(checkIsPositiveNumber(NaN)).toBe(false);
  });
});

describe("checkIsNotZero 함수 테스트", () => {
  test("0에 대해 false를 반환한다", () => {
    expect(checkIsNotZero(0)).toBe(false);
  });

  test("0이 아닌 숫자에 대해 true를 반환한다", () => {
    expect(checkIsNotZero(5)).toBe(true);
    expect(checkIsNotZero(-5)).toBe(true);
  });
});

describe("checkIsTypeObject 함수 테스트", () => {
  test("객체에 대해 true를 반환한다", () => {
    expect(checkIsTypeObject({})).toBe(true);
    expect(checkIsTypeObject([])).toBe(true);
  });

  test("비객체에 대해 false를 반환한다", () => {
    expect(checkIsTypeObject(5)).toBe(false);
    expect(checkIsTypeObject(null)).toBe(false); // null은 typeof에서 "object"를 반환하지만, 일반적인 객체 테스트 목적에는 부합하지 않을 수 있음
  });
});

describe("checkIsUnder 함수 테스트", () => {
  test("지정된 값보다 작은 경우 true를 반환한다", () => {
    expect(checkIsUnder(5, 10)).toBe(true);
  });

  test("지정된 값보다 크거나 같은 경우 false를 반환한다", () => {
    expect(checkIsUnder(10, 10)).toBe(false);
    expect(checkIsUnder(15, 10)).toBe(false);
  });
});

describe("checkIsOver 함수 테스트", () => {
  test("지정된 값보다 크거나 같은 경우 true를 반환한다", () => {
    expect(checkIsOver(10, 10)).toBe(true);
    expect(checkIsOver(15, 10)).toBe(true);
  });

  test("지정된 값보다 작은 경우 false를 반환한다", () => {
    expect(checkIsOver(5, 10)).toBe(false);
  });
});
