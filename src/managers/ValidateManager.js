import { MenuCount } from "../models/MenuCount.js";
import { MenuMatrix } from "../models/MenuMatrix.js";
import { MenuName } from "../models/MenuName.js";
import { MenuUnprocessed } from "../models/MenuUnprocessed.js";

// Validation이 이루어지는 메서드 모음
export class ValidateManager {
  menuIsNotArrayYet(menu) {
    new MenuUnprocessed(menu);
  }
  menuNameAndCount(menu) {
    new MenuName(menu[0]);
    new MenuCount(menu[1]);
  }
  menuMatrix(menuMatrix) {
    new MenuMatrix(menuMatrix);
  }
}
