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
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...payload, quantity: 1 }],
        }
      }
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      }
    case CartActionTypes.DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload.id),
      }
    case CartActionTypes.DECREASE_CART_ITEM:
      return { ...state, cartItems: decreaseCartItem(state.cartItems, payload) }
    default:
      return state
  }
}

function decreaseCartItem(items, itemToDecrease) {
  const quantity = items.find((item) => item.id === itemToDecrease.id).quantity
  if (quantity === 1) {
    return items.filter((item) => item.id !== itemToDecrease.id)
  }
  return items.map((item) =>
    item.id === itemToDecrease.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  )
}

export default CartReducer
