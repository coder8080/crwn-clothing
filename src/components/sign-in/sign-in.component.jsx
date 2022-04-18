import { Component } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss'
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    const { signInWithEmail } = this.props
    signInWithEmail({ email, password })
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { signInWithGoogle } = this.props
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            id="email-input"
            type="text"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            id="password-input"
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn={true}
            >
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  signInWithEmail: (credentials) => dispatch(emailSignInStart(credentials)),
})

export default connect(null, mapDispatchToProps)(SignIn)
