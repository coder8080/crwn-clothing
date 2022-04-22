import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-up.styles.scss'
import { Component } from 'react'
import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions'

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  handleChange = async (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    const { signUp } = this.props
    if (password !== confirmPassword) {
      alert("Passwords don't match.")
      return
    }
    signUp({ email, password, displayName })
    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
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

const mapDispatchToProps = (dispatch) => ({
  signUp: (credentials) => dispatch(signUpStart(credentials)),
})

export default connect(null, mapDispatchToProps)(SignUp)
