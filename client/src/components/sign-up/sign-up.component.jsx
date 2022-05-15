import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { signUpStart } from '../../redux/user/user.actions'
import {
  selectRegisterError,
  selectIsRegistering,
} from '../../redux/user/user.selectors'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import Errors from '../errors/errors.component'
import SmallSpinner from '../small-spinner/small-spinner.component'
import './sign-up.styles.scss'

const SignUp = () => {
  const dispatch = useDispatch()
  const [credentials, setCredetials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { displayName, email, password, confirmPassword } = credentials

  const handleChange = async (e) => {
    const { name, value } = e.target
    setCredetials((credentials) => ({ ...credentials, [name]: value }))
  }

  const isRegistering = useSelector(selectIsRegistering)
  const error = useSelector(selectRegisterError)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match.")
      return
    }
    dispatch(signUpStart({ email, password, displayName }))
    setCredetials({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="signup-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="name"
          value={displayName}
          onChange={handleChange}
          disabled={isRegistering}
        />
        <FormInput
          type="email"
          name="email"
          label="email"
          value={email}
          onChange={handleChange}
          disabled={isRegistering}
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={password}
          onChange={handleChange}
          disabled={isRegistering}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="confirm password"
          value={confirmPassword}
          onChange={handleChange}
          disabled={isRegistering}
        />
        {error ? <Errors errors={[error]} /> : null}
        <CustomButton type="submit" disabled={isRegistering}>
          SIGN UP
        </CustomButton>
        {isRegistering ? <SmallSpinner /> : null}
      </form>
    </div>
  )
}

export default SignUp
