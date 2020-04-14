import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectCollections = createSelector(
  [selectDirectory],
  (shop) => shop.collections
);

export const selectMenUpperSection = createSelector(
  [selectCollections],
  (collections) => collections.filter((section) => section.id <= 2)
);
export const selectMenLowerSection = createSelector(
  [selectCollections],
  (collections) =>
    collections.filter((section) => section.id <= 4 && section.id > 2)
);
export const selectWomenUpperSection = createSelector(
  [selectCollections],
  (collections) =>
    collections.filter((section) => section.id <= 6 && section.id > 4)
);
export const selectWomenLowerSection = createSelector(
  [selectCollections],
  (collections) => collections.filter((section) => section.id > 6)
);

export const selectItemsInSection = (category) =>
  createSelector([selectCollections], (collections) =>
    collections.filter((section) => section.routeName === category)
  );
