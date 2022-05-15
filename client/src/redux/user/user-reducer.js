import UserActionTypes from './user.types'

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isSubmitting: false,
}

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
        isSubmitting: false,
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      }
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      console.log(payload)
      return {
        ...state,
        error: payload,
        isSubmitting: false,
      }
    case UserActionTypes.GOOGLE_SIGN_IN_START:
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        currentUser: null,
        error: null,
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
