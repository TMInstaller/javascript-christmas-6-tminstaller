import {
  createCategoryCounts,
  makeMatrixOrderableMenu,
} from "../../src/utils/creation";

describe("makeMatrixOrderableMenu 함수 테스트", () => {
  test("2차원 메뉴 배열을 생성한다", () => {
    const matrix = makeMatrixOrderableMenu();
    expect(matrix).toBeInstanceOf(Array);
    // 예상되는 구조를 가진 몇 가지 항목을 검사
    expect(matrix).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          expect.any(String),
          expect.any(String),
          expect.any(String),
          expect.any(Number),
        ]),
      ])
    );
  });
});

describe("createCategoryCounts 함수 테스트", () => {
  const matrixOrderedMenu = makeMatrixOrderableMenu();

  test("주문된 메뉴에 따라 카테고리별 수량을 정확하게 계산한다", () => {
    const orderedMenu = [
      ["레드와인", 2],
      ["제로콜라", 3],
    ];
    const categoryCounts = createCategoryCounts(orderedMenu, matrixOrderedMenu);

    expect(categoryCounts["BEVERAGE"]).toBe(5);
  });

  test("주문된 메뉴에 없는 항목은 카테고리별 수량 계산에 영향을 주지 않는다", () => {
    const orderedMenu = [["칠성사이다", 1]];
    const categoryCounts = createCategoryCounts(orderedMenu, matrixOrderedMenu);

    expect(categoryCounts["음료"]).toBeUndefined();
  });
});
