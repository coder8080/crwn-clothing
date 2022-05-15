import { useState } from 'react'
import { useDispatch } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import SmallSpinner from '../small-spinner/small-spinner.component'
import Errors from '../errors/errors.component'
import {
  selectIsSubmitting,
  selectUserError,
} from '../../redux/user/user.selectors'
import { useSelector } from 'react-redux'
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions'
import './sign-in.styles.scss'

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const { email, password } = credentials

  const dispatch = useDispatch()

  const isSubmitting = useSelector(selectIsSubmitting)
  const error = useSelector(selectUserError)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = credentials
    dispatch(emailSignInStart({ email, password }))
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setCredentials((credentials) => ({ ...credentials, [name]: value }))
  }

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          id="email-input"
          type="text"
          name="email"
          value={email}
          handleChange={handleChange}
          label="email"
          disabled={isSubmitting}
          required
        />
        <FormInput
          id="password-input"
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="password"
          disabled={isSubmitting}
          required
        />
        {error ? <Errors errors={[error]} /> : null}
        <div className="buttons">
          <CustomButton type="submit" disabled={isSubmitting}>
            Sign in
          </CustomButton>
          {isSubmitting ? <SmallSpinner /> : null}
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn={true}
          >
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
