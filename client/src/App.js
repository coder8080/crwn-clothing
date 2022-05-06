import { useEffect, lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Header from './components/header/header.component'
import { checkUserSession } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'
import GlobalStyle from './global.styles'

const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const SignInAndUpPage = lazy(() =>
  import('./pages/sign-in-and-up/sign-in-and-up.component')
)
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))

const App = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<div>Loading ...</div>}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/shop" /> : <SignInAndUpPage />
            }
          />
          <Route path="/checkout" component={CheckoutPage} />
        </Suspense>
      </Switch>
    </div>
  )
}

export default App
