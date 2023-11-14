import { increaseOrMaintain } from "../../src/utils/update";

describe("increaseOrMaintain 함수 테스트", () => {
  test("value가 존재하면 numberData를 더한다", () => {
    expect(increaseOrMaintain(5, 3)).toBe(8);
  });

  test("value가 undefined면 numberData를 반환한다", () => {
    expect(increaseOrMaintain(undefined, 3)).toBe(3);
  });

  test("value가 null이면 numberData를 반환한다", () => {
    expect(increaseOrMaintain(null, 3)).toBe(3);
  });
});
