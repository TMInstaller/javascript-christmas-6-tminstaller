import { sumArray } from "../../src/utils/calculate";

describe("calculate util 테스트", () => {
  const testCases = [
    [[100, 20], 120],
    [[123, 45], 168],
    [[1, 2, 3, 4, 5], 15],
    [[0, 0, 1, 1000, 2000], 3001],
    [[300, 10, 4000, 32], 4342],
  ];

  test.each(testCases)(
    "배열을 집어넣었을 때 배열 내의 값의 합이 정상적으로 출력되어야 한다.",
    (arrayItem, expectedResult) => {
      const testCase = sumArray(arrayItem); // sumArray 또는 해당 계산을 수행하는 함수 사용

      expect(testCase).toBe(expectedResult);
    }
  );

  test("...다른 테스트", () => {});
});
