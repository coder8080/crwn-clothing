import { takeLatest, put, all, call } from 'redux-saga/effects'

import {
  auth,
  googleProvider,
  createUserProfile,
  getCurrentUser,
} from '../../firebase/firebase.utils'
import UserActionTypes from './user.types'
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailre,
} from './user.actions'

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfile, userAuth)
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({ id: userSnapshot.id, data: userSnapshot.data() }))
  } catch (e) {
    yield put(signInFailure(e))
  }
}

export function* signInWithGoogleStart() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (e) {
    yield put(signInFailure(e))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogleStart)
}

export function* signInWithEmailStart({ payload: { email, password } }) {
  try {
    const { user } = auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (e) {
    yield put(signInFailure(e))
  }
}

export function* onSignInWithEmail() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmailStart)
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return
    yield getSnapshotFromUserAuth(userAuth)
  } catch (e) {
    yield put(signInFailure(e))
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut() {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (e) {
    yield put(signOutFailre(e))
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onSignInWithEmail),
    call(onCheckUserSession),
    call(onSignOutStart),
  ])
}
