import ShopActionTypes from './shop.types'

const INITIAL_STATE = {
  collections: null,
  isLoading: false,
  error: null,
}

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return { ...state, isLoading: true }
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, isLoading: false, collections: payload, error: null }
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return { ...state, isLoading: false, error: payload }
    default:
      return state
  }
}

export default shopReducer
