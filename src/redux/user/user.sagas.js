import { takeLatest, put, all, call } from 'redux-saga/effects'

import {
  auth,
  createUserProfile,
  getCurrentUser,
  signInWithGoogle,
} from '../../firebase/firebase.utils'
import UserActionTypes from './user.types'
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailre,
  signUpSuccess,
  signUpFailure,
} from './user.actions'

export function* createProfileAndSignIn(userAuth) {
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
    const { user } = yield signInWithGoogle()
    yield createProfileAndSignIn(user)
  } catch (e) {
    yield put(signInFailure(e))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogleStart)
}

export function* signInWithEmailStart({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield createProfileAndSignIn(user)
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
    yield createProfileAndSignIn(userAuth)
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

export function* signUpWithEmail({
  payload: { email, password, displayName },
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    const userRef = yield createUserProfile(user, { displayName })
    const userSnapshot = yield userRef.get()
    yield put(signUpSuccess({ id: userSnapshot.id, data: userSnapshot.data() }))
  } catch (e) {
    yield put(signUpFailure(e))
  }
}

export function* onSignUpWithEmail() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpWithEmail)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onSignInWithEmail),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpWithEmail),
  ])
}
