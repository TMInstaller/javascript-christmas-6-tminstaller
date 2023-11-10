import { ERROR_CONVENTION } from "../../src/constants/convention.js";
import { EVENT, MENU_COUNT } from "../../src/constants/number.js";
import { MenuMatrix } from "../../src/models/MenuMatrix.js";

describe("MenuMatrix 모델 테스트", () => {
  test(`배열 안에 존재하는 모든 수의 합이 ${MENU_COUNT.maximun}을 넘는다면 예외를 발생시킨다.`, async () => {
    const input = [
      ["레드와인", 5],
      ["초코케이크", 12],
      ["해산물파스타", 5],
    ];
    expect(() => {
      new MenuMatrix(input);
    }).toThrow(ERROR_CONVENTION);
  });

  test(`배열 안에 들어있는 모든 메뉴 가격 합이 ${EVENT.minimumAmount}를 넘지 않는다면 예외를 발생시킨다.`, async () => {
    const input = [["시저샐러드", 1]];
    expect(() => {
      new MenuMatrix(input);
    }).toThrow(ERROR_CONVENTION);
  });

  test(`배열 내 서로다른 주문내역에 같은 이름의 상품이 존재하면 예외를 발생시킨다.`, async () => {
    const input = [["시저샐러드", 1]];
    expect(() => {
      new MenuMatrix(input);
    }).toThrow(ERROR_CONVENTION);
  });

  test(`주문내역에 음료만 있다면 예외를 발생시킨다.`, async () => {
    const input = [["레드와인", 2]];
    expect(() => {
      new MenuMatrix(input);
    }).toThrow(ERROR_CONVENTION);
  });
});
