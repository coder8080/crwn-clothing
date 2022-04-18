import UserActionTypes from './user.types'

const INITIAL_STATE = {
  currentUser: null,
  error: null,
}

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      }
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: payload,
      }
    case UserActionTypes.GOOGLE_SIGN_IN_START:
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        currentUser: null,
        error: null,
      }
    default:
      return state
  }
}

export default userReducer
