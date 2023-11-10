import { ERROR_CONVENTION } from "../../src/constants/convention";
import { MenuName } from "../../src/models/MenuName";

describe("MenuName 모델 테스트", () => {
  test("입력받은 메뉴들 중 하나의 메뉴에서 이름이 비어있는지 확인", async () => {
    const input = "";
    expect(() => {
      new MenuName(input);
    }).toThrow(ERROR_CONVENTION);
  });

  test("입력받은 메뉴들 중 하나의 메뉴에서 실제 존재하는 메뉴이름인지 확인", async () => {
    const input = "김치찌개";
    expect(() => {
      new MenuName(input);
    }).toThrow(ERROR_CONVENTION);
  });
});
