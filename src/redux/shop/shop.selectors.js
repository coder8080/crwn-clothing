import { createSelector } from 'reselect'

const selectShop = (state) => state.shop

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections ?? []
)

export const selectCollectionsArray = createSelector(
  [selectCollections],
  (collections) => Object.values(collections)
)

export const selectCollection = (collectionName) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionName] : null
  )

export const selectIsLoading = createSelector(
  selectShop,
  (shop) => shop.isLoading
)

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
)
