import { useState } from 'react'
import { connect } from 'react-redux'

import { signUpStart } from '../../redux/user/user.actions'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-up.styles.scss'

const SignUp = ({ signUp }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match.")
      return
    }
    signUp({ email, password, displayName })
    setCredetials({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  return (
    <div className="signup">
      <h2 className="title">I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="signup-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="name"
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          label="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="confirm password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (credentials) => dispatch(signUpStart(credentials)),
})

export default connect(null, mapDispatchToProps)(SignUp)
