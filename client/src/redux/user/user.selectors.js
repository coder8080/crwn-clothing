import { createSelector } from 'reselect'

const selectUser = (state) => state.user
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
)

export const selectIsSubmitting = createSelector(
  [selectUser],
  (user) => user.isSubmitting
)

export const selectUserError = createSelector(
  [selectUser],
  (user) => user.error
)

export const selectIsRegistering = createSelector(
  [selectUser],
  (user) => user.isRegistering
)

export const selectRegisterError = createSelector(
  [selectUser],
  (user) => user.registerError
)
