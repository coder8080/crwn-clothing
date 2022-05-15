import UserActionTypes from './user.types'

const convertErrorToText = (error) => {
  switch (error.code) {
    case 'auth/internal-error':
      return 'Our authorization server is broken. Please retry in a few minutes'
    case 'auth/invalid-email':
      return 'Incorrect email address'
    case 'auth/invalid-password':
      return 'Invalid password. It has to be at least 6 symbols'
    case 'auth/wrong-password':
      return 'Wrong password'
    case 'auth/email-already-exists':
      return 'This email is already taken'
    case 'auth/user-not-found':
      return 'User with this email is not found'
    case 'auth/email-already-in-use':
      return 'This email is already in use. Try to sign in or reset your password'
    default:
      return `Unknown auth error: ${error.code}`
  }
}

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
  payload: convertErrorToText(error),
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

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: convertErrorToText(error),
})
