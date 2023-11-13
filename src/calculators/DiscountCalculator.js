export class DiscountCalculator {
  calculateChristmasDiscount(date) {
    if (date < 26) {
      return 1000 + (date - 1) * 100;
    }
    return 0;
  }
  calculateWeekdaysDiscount(date, orderedCategories) {
    const weekDays = [
      4, 5, 6, 7, 11, 12, 13, 14, 18, 19, 20, 21, 25, 26, 27, 28,
    ];
    if (weekDays.includes(date) && !isNaN(orderedCategories.DESSERT)) {
      return 2023 * orderedCategories.DESSERT;
    }
    return 0;
  }
  calculateWeekendsDiscount(date, orderedCategories) {
    const specialDays = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];
    if (specialDays.includes(date) && !isNaN(orderedCategories.MAIN)) {
      return 2023 * orderedCategories.MAIN;
    }
    return 0;
  }
  calculateSpecialDiscount(date) {
    const specialDays = [3, 10, 17, 24, 25, 31];
    if (specialDays.includes(date)) {
      return 1000;
    }
    return 0;
  }
}
