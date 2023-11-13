import {
  createCategoryCounts,
  makeMatrixOrderedMenu,
} from "../utils/creation.js";

export class EventCheckManager {
  checkHowManyMenuInCategory(orderedMenu) {
    const menuMatrix = makeMatrixOrderedMenu();
    const categoryCounts = createCategoryCounts(orderedMenu, menuMatrix);
    return categoryCounts;
  }

  checkBadgeToTake(totalBenefits) {
    if (totalBenefits >= 20000) {
      return "산타";
    } else if (totalBenefits >= 10000) {
      return "트리";
    } else if (totalBenefits >= 5000) {
      return "별";
    }
  }
}
