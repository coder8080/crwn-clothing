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

export const deleteCartItem = (item) => ({
  type: CartActionTypes.DELETE_CART_ITEM,
  payload: item,
})

export const decreaseCartItem = (item) => ({
  type: CartActionTypes.DECREASE_CART_ITEM,
  payload: item,
})

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
})
