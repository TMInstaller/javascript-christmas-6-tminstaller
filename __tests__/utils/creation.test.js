import {
  createCategoryCounts,
  makeMatrixOrderedMenu,
} from "../../src/utils/creation";

describe("makeMatrixOrderedMenu 함수 테스트", () => {
  test("2차원 메뉴 배열을 생성한다", () => {
    const matrix = makeMatrixOrderedMenu();
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
  test("주문된 메뉴를 바탕으로 카테고리별 수량을 계산한다", () => {
    const orderedMenu = [
      ["시저샐러드", 2],
      ["제로콜라", 3],
    ];
    const matrixOrderedMenu = makeMatrixOrderedMenu();
    const categoryCounts = createCategoryCounts(orderedMenu, matrixOrderedMenu);

    expect(categoryCounts).toBeInstanceOf(Object);
  });
});
