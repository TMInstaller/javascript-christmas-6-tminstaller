import { DIVIDE_CONVENTION } from "../constants/convention.js";
import { divideData } from "../utils/conversion.js";

// 2회 이상의 변환 작업을 담당하는 메서드 모음
export class ConvertManager {
  menuToMatrix(menuUnprocessed) {
    const menuArray = divideData(menuUnprocessed, DIVIDE_CONVENTION.menu);
    const menuMatrix = menuArray.map((item) =>
      divideData(item, DIVIDE_CONVENTION.nameAndCount)
    );
    return menuMatrix;
  }
}
