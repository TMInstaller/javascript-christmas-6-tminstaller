import { ERROR_CONVENTION } from "../../src/constants/convention.js";
import { MenuCount } from "../../src/models/MenuCount.js";

describe("MenuCount 모델 테스트", () => {
  test("입력받은 값이 비어있는 값인지 확인", async () => {
    const input = "";
    expect(() => {
      new MenuCount(input);
    }).toThrow(ERROR_CONVENTION);
  });

  test("입력받은 값을 숫자로 변환했을 때 Number 형식인 지 확인", async () => {
    const input = "abc";
    expect(() => {
      new MenuCount(input);
    }).toThrow(ERROR_CONVENTION);
  });

  test("입력받은 값을 숫자로 변환했을 때 최솟값보다 작은 지 확인", async () => {
    const input = "0";
    expect(() => {
      new MenuCount(input);
    }).toThrow(ERROR_CONVENTION);
  });

  test("입력받은 값을 숫자로 변환했을 때 최댓값보다 큰 지 확인", async () => {
    const input = "23";
    expect(() => {
      new MenuCount(input);
    }).toThrow(ERROR_CONVENTION);
  });

  test("입력받은 값을 숫자로 변환했을 때 정수형인 지 확인", async () => {
    const input = "2.3";
    expect(() => {
      new MenuCount(input);
    }).toThrow(ERROR_CONVENTION);
  });
});
