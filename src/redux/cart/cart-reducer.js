import { CartActionTypes } from './cart.types'

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}

const CartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CartActionTypes.SET_HIDDEN:
      return { ...state, hidden: payload }
    case CartActionTypes.TOGGLE_HIDDEN:
      return { ...state, hidden: !state.hidden }
    case CartActionTypes.ADD_CART_ITEM:
      const i = state.cartItems.findIndex((x) => x.name === payload.name)
      if (i > -1) {
        let newCartItems = [...state.cartItems]
        newCartItems[i].quantity++
        return { ...state, cartItems: newCartItems }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...payload, quantity: 1 }],
        }
      }
    default:
      return state
  }
}

export default CartReducer
