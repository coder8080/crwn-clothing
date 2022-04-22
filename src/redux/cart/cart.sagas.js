import { call, takeLatest, all } from 'redux-saga/effects'
import { clearCart } from './cart.actions'
import UserActionTypes from '../user/user.types'
import { put } from 'redux-saga/effects'

export function* clearCartItems() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartItems)
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)])
}
