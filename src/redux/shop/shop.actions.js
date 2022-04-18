import ShopActionTypes from './shop.types'

export const getCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const getCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
})

export const getCollectionsFailure = (error) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error,
})

export const fetchCollections = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS,
})
