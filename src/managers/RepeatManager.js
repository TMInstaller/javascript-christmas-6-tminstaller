import { stringToNumber } from "../utils/conversion.js";
import { ValidateManager } from "./ValidateManager.js";

// 반복 관련 메서드 모음
export class RepeatManager {
  constructor() {
    this.validateManager = new ValidateManager();
  }

  validateMenuAndConvert(menuMatrix) {
    for (const menu of menuMatrix) {
      this.validateManager.menuNameAndCount(menu);
      menu[1] = stringToNumber(menu[1]);
    }
  }
}
