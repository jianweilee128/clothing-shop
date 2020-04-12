import { createSelector } from "reselect";

const getDirectory = (state) => state.directory.SHOP_DATA;

export const selectMenUpperSection = createSelector(
  [getDirectory],
  (directory) => directory.filter((section) => section.id <= 2)
);
export const selectMenLowerSection = createSelector(
  [getDirectory],
  (directory) =>
    directory.filter((section) => section.id <= 4 && section.id > 2)
);
export const selectWomenUpperSection = createSelector(
  [getDirectory],
  (directory) =>
    directory.filter((section) => section.id <= 6 && section.id > 4)
);
export const selectWomenLowerSection = createSelector(
  [getDirectory],
  (directory) => directory.filter((section) => section.id > 6)
);

export const selectItemsInSection = (category) =>
  createSelector([getDirectory], (directory) =>
    directory.filter((section) => section.routeName === category)
  );
