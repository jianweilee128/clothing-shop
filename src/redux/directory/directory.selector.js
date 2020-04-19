import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectCollections = createSelector(
  [selectDirectory],
  (shop) => shop.collections
);

export const selectMenSection = createSelector(
  [selectCollections],
  (collections) => collections.filter((section) => section.id <= 4)
);
export const selectWomenSection = createSelector(
  [selectCollections],
  (collections) => collections.filter((section) => section.id > 4)
);

export const selectItemsInSection = (category) =>
  createSelector([selectCollections], (collections) =>
    collections.filter((section) => section.routeName === category)
  );
