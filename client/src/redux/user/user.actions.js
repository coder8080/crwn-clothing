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

export const signInFailure = (error) => {
  let errorText = ''
  console.log({ ...error })
  console.log(error.name)
  switch (error.code) {
    case 'auth/internal-error':
      errorText =
        'Our authorization server is broken. Please retry in a few minutes'
      break
    case 'auth/invalid-email':
      errorText = 'Incorrect email address'
      break
    case 'auth/invalid-password':
      errorText = 'Invalid password. It has to be at least 6 symbols'
      break
    case 'auth/wrong-password':
      errorText = 'Wrong password'
      break
    case 'auth/email-already-exists':
      errorText = 'This email is already taken'
      break
    case 'auth/user-not-found':
      errorText = 'User with this email is not found'
      break
    default:
      errorText = `Unknown auth error: ${error.code}`
  }
  return {
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: errorText,
  }
}

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
