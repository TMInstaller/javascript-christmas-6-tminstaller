import { EVENT } from "../constants/number.js";
import { BADGE_NAME } from "../constants/word.js";
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
    if (totalBenefits >= EVENT.santaBadge) {
      return BADGE_NAME.santa;
    } else if (totalBenefits >= EVENT.treeBadge) {
      return BADGE_NAME.tree;
    } else if (totalBenefits >= EVENT.starBadge) {
      return BADGE_NAME.star;
    }
  }
}
