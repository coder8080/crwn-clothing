import UserActionTypes from './user.types'

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  registerError: null,
  isSubmitting: false,
  isRegistering: false,
}

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
        registerError: null,
        isSubmitting: false,
        isRegistering: false,
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
        registerError: null,
        isSubmitting: false,
        isRegistering: false,
      }
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        registerError: payload,
        isRegistering: false,
      }
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: payload,
        isSubmitting: false,
      }
    case UserActionTypes.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        currentUser: null,
        error: null,
        isSubmitting: true,
      }
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        currentUser: null,
        error: null,
        isRegistering: true,
      }
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        currentUser: null,
        error: null,
        isSubmitting: true,
      }
    default:
      return state
  }
}

export default userReducer
