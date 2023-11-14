import { COUNT_CONVENTION } from "../../src/constants/convention";
import {
  convertMatrixItemToFormattedString,
  convertNumberToKoreaMoney,
  divideData,
  makeObjectToArray,
  makeObjectValuesToArray,
  makeObjectValuesToArrayFlat,
  stringToNumber,
} from "../../src/utils/conversion";

describe("stringToNumber 함수 테스트", () => {
  test("문자열을 숫자로 변환한다", () => {
    expect(stringToNumber("123")).toBe(123);
  });

  test("숫자 형식이 아닌 문자열을 변환하면 NaN을 반환한다", () => {
    expect(stringToNumber("abc")).toBeNaN();
  });
});

describe("divideData 함수 테스트", () => {
  test("문자열을 구분자로 나눈다", () => {
    expect(divideData("1,2,3", ",")).toEqual(["1", "2", "3"]);
  });
});

describe("makeObjectValuesToArrayFlat 함수 테스트", () => {
  test("객체의 모든 값을 하나의 배열로 평탄화한다", () => {
    const objectData = { a: { x: 1, y: 2 }, b: { z: 3 } };
    expect(makeObjectValuesToArrayFlat(objectData)).toEqual([1, 2, 3]);
  });
});

describe("makeObjectValuesToArray 함수 테스트", () => {
  test("객체의 모든 값을 배열로 반환한다", () => {
    const objectData = { a: 1, b: 2, c: 3 };
    expect(makeObjectValuesToArray(objectData)).toEqual([1, 2, 3]);
  });
});

describe("makeObjectToArray 함수 테스트", () => {
  test("객체의 모든 키-값 쌍을 배열로 변환한다", () => {
    const objectData = { a: 1, b: 2 };
    expect(makeObjectToArray(objectData)).toEqual([
      ["a", 1],
      ["b", 2],
    ]);
  });
});

describe("convertNumberToKoreaMoney 함수 테스트", () => {
  test("숫자를 한국 원화 형식으로 변환한다", () => {
    expect(convertNumberToKoreaMoney(123456)).toBe("123,456원");
  });
});

describe("convertMatrixItemToFormattedString 함수 테스트", () => {
  test("이차원 배열을 포맷된 문자열로 변환한다", () => {
    const matrixItem = [
      ["사과", 5],
      ["바나나", 3],
    ];
    expect(convertMatrixItemToFormattedString(matrixItem)).toBe(
      `사과 5${COUNT_CONVENTION}\n바나나 3${COUNT_CONVENTION}`
    );
  });
});
