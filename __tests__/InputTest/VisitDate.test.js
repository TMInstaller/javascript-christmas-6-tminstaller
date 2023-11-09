import { ERROR_CONVENTION } from "../../src/constants/convention.js";
import { VisitDate } from "../../src/models/VisitDate.js";

describe("VisitDate 모델 테스트", () => {
  test("입력받은 날짜를 숫자로 변환했을 때 Number 형식인 지 확인", async () => {
    const input = "abc";
    expect(() => {
      new VisitDate(input);
    }).toThrow(ERROR_CONVENTION);
  });

  test("입력받은 날짜를 숫자로 변환했을 때 최솟값보다 작은 지 확인", async () => {
    const input = "0";
    expect(() => {
      new VisitDate(input);
    }).toThrow(ERROR_CONVENTION);
  });

  test("입력받은 날짜를 숫자로 변환했을 때 최댓값보다 큰 지 확인", async () => {
    const input = "34";
    expect(() => {
      new VisitDate(input);
    }).toThrow(ERROR_CONVENTION);
  });

  test("입력받은 날짜를 숫자로 변환했을 때 정수형인 지 확인", async () => {
    const input = "2.3";
    expect(() => {
      new VisitDate(input);
    }).toThrow(ERROR_CONVENTION);
  });
});
