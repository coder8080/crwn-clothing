import UserActionTypes from './user.types'

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
})

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
})

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
})

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
})

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
})

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
})

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
})

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
})

export const signOutFailre = (e) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: e,
})

export const signUpStart = (credentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: credentials,
})

export const signUpSuccess = (user) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: user,
})

export const signUpFailure = (e) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: e,
})
