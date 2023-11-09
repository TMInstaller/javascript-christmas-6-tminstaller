import { ERROR_CONVENTION } from "../../src/constants/convention";
import { MenuUnprocessed } from "../../src/models/MenuUnprocessed";

describe("MenuUnprocessed 모델 테스트", () => {
  test("입력받은 메뉴가 비어있는 값인지 확인", async () => {
    const input = "";
    expect(() => {
      new MenuUnprocessed(input);
    }).toThrow(ERROR_CONVENTION);
  });

  test("입력받은 메뉴를 각 메뉴로 나누었을 때 올바른 형식으로 각각의 값이 이루어져있는 지 확인", async () => {
    const input = "[[메뉴-구매수량],[메뉴-구매수량]],[메뉴&구매수량]]";
    expect(() => {
      new MenuUnprocessed(input);
    }).toThrow(ERROR_CONVENTION);
  });
});
