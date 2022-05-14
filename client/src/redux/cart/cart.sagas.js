import { put, call, takeLatest, all, select } from 'redux-saga/effects'
import { clearCart, setFullCart } from './cart.actions'
import UserActionTypes from '../user/user.types'
import { CartActionTypes } from './cart.types'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { firestore } from '../../firebase/firebase.utils'
import { selectCurrentUser } from '../user/user.selectors'
import { selectCartItems } from './cart.selectors'

export function* setCartFromFirebase() {
  const { id: currentUserId } = yield select(selectCurrentUser)
  if (currentUserId) {
    const cartRef = yield doc(firestore, 'carts', currentUserId)
    const cartSnapshot = yield getDoc(cartRef)
    if (cartSnapshot.exists()) {
      const { cartItems } = cartSnapshot.data()
      yield put(setFullCart(cartItems))
    }
  }
}

export function* updateCart() {
  const currentUser = yield select(selectCurrentUser)
  if (currentUser) {
    const currentUserId = currentUser.id
    const cartItems = yield select(selectCartItems)
    const cartRef = yield doc(firestore, 'carts', currentUserId)
    yield setDoc(cartRef, { cartItems })
  }
}

export function* lookForCartChange() {
  yield all([
    takeLatest(CartActionTypes.ADD_CART_ITEM, updateCart),
    takeLatest(CartActionTypes.DELETE_CART_ITEM, updateCart),
    takeLatest(CartActionTypes.DECREASE_CART_ITEM, updateCart),
    takeLatest(CartActionTypes.CLEAR_CART, updateCart),
  ])
}

export function* lookForSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, setCartFromFirebase)
}

export function* clearCartItems() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartItems)
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(lookForCartChange),
    call(lookForSignIn),
  ])
}
