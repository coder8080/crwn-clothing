import { CartActionTypes } from './cart.types'

export const setHidden = (hidden) => ({
  type: CartActionTypes.SET_HIDDEN,
  payload: hidden,
})

export const toggleHidden = () => ({
  type: CartActionTypes.TOGGLE_HIDDEN,
})

export const addCartItem = (item) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item,
})
