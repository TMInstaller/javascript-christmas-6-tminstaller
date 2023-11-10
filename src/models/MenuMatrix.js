import { ERROR_CONVENTION } from "../constants/convention.js";
import { ERROR_MESSAGE } from "../constants/error.js";
import { MENU_COUNT, PRICE } from "../constants/number.js";
import { BEVERAGE, FULL_MENU } from "../constants/word.js";
import { checkIsOverMaximum } from "../utils/condition.js";
import { makeObjectValuesToArray } from "../utils/conversion.js";

export class MenuMatrix {
  #matrixData;

  constructor(matrixData) {
    this.#matrixData = matrixData;
    this.#isTotalCountOverMaximum(matrixData);
    this.#isTotalAmountUnderMinimum(matrixData);
    this.#isMatrixHasDuplicates(matrixData);
    this.#isMatrixHasOnlyBeverages(matrixData);
  }

  // 배열 안에 들어있는 모든 수의 합이 20개를 넘는 지 확인
  #isTotalCountOverMaximum(matrixData) {
    let countAll = 0;
    for (const arrayData of matrixData) {
      countAll += arrayData[1];
    }
    checkIsOverMaximum(countAll, MENU_COUNT.maximun);
  }

  // 배열 안에 들어있는 모든 메뉴의 가격 합이 10,000원을 넘지 않는지 확인
  #isTotalAmountUnderMinimum(matrixData) {
    console.log(matrixData);
    // 한글 이름, 영어 이름, 가격을 포함하는 2차원 배열 생성
    const matrixPrice = [];
    Object.entries(FULL_MENU).forEach(([category, items]) => {
      Object.entries(items).forEach(([key, koreanName]) => {
        const price = PRICE[key];
        matrixPrice.push([category, koreanName, key, price]);
      });
    });

    // matrixData의 각 항목에 해당하는 가격을 찾아 합산
    let countAmount = 0;
    for (const [menuItem, quantity] of matrixData) {
      const priceInfo = matrixPrice.find(
        ([, koreanName]) => koreanName === menuItem
      );
      console.log({ priceInfo, matrixPrice });
      if (priceInfo) {
        const price = priceInfo[3];
        console.log({ price });
        countAmount += price * quantity;
      }
    }
    console.log(countAmount);
    // 총합이 10,000원을 넘지 않으면 오류 발생
    if (countAmount < 10000) {
      throw new Error(ERROR_MESSAGE.isInvalidOrder);
    }
  }

  // TODO: 배열 내부에 중복되는 메뉴 이름이 있는지 확인
  #isMatrixHasDuplicates(matrixData) {
    let checkDuplicateSet = new Set();
    for (const arrayData of matrixData) {
      if (checkDuplicateSet.has(arrayData[0])) {
        throw new Error(ERROR_MESSAGE.isDuplicated);
      }
      checkDuplicateSet.add(arrayData[0]);
    }
  }
  // TODO: 배열 내부에 음료만 존재하는지 확인
  #isMatrixHasOnlyBeverages(matrixData) {
    let isOnlyBeverage = false;
    // 음료가 가지고 있는 이름들만 모아놓은 배열 생성
    const beveragesList = makeObjectValuesToArray(BEVERAGE);
    // 음료 안에 들어있지 않다면 return, 모든 순회를 마쳤다면 throw
    for (const arrayData of matrixData) {
      if (!beveragesList.includes(arrayData[0])) {
        throw new Error(ERROR_MESSAGE.isInvalidOrder);
      }
    }
  }
}
