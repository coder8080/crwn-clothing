import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-up.styles.scss'
import { Component } from 'react'
import { auth, createUserProfile } from '../../firebase/firebase.utils'

class SignUp extends Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleChange = async (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert("Passwords don't match.")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfile(user, { displayName })
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (e) {
      console.log('error creating user profile', e)
    }
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className="signup">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="name"
            value={displayName}
            onChange={this.handleChange}
          />
          <FormInput
            type="email"
            name="email"
            label="email"
            value={email}
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={password}
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="confirm password"
            value={confirmPassword}
            onChange={this.handleChange}
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
