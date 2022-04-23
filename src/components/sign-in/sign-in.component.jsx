import { useState } from 'react'
import { useDispatch } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions'
import './sign-in.styles.scss'

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const { email, password } = credentials

  const dispatch = useDispatch()

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
          required
        />
        <FormInput
          id="password-input"
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
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
