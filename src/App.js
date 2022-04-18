import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './pages/homepage/homepage.component'
import { createStructuredSelector } from 'reselect'

import ShopPage from './pages/shop/shop.component'
import SignInAndUpPage from './pages/sign-in-and-up/sign-in-and-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component'
import { Component } from 'react'
import { checkUserSession } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'
import './App.css'

class App extends Component {
  componentDidMount = () => {
    const { checkUserSession } = this.props
    checkUserSession()
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { currentUser } = this.props
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/shop" /> : <SignInAndUpPage />
            }
          />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
