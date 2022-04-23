import { useSelector, useDispatch } from 'react-redux'
import { ReactComponent as Crwn } from '../../assets/crown.svg'

import Cart from '../cart/cart.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import {
  HeaderComponent,
  OptionsContainer,
  OptionLink,
  LogoContainer,
} from './header.styles'
import { signOutStart } from '../../redux/user/user.actions'

const Header = () => {
  const currentUser = useSelector(selectCurrentUser)
  const hidden = useSelector(selectCartHidden)
  const dispatch = useDispatch()

  return (
    <HeaderComponent>
      <LogoContainer to="/">
        <Crwn className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <Cart />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderComponent>
  )
}

export default Header
