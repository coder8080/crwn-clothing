import { ReactComponent as Crwn } from "../../assets/crown.svg"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import Cart from "../cart/cart.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { auth } from "../../firebase/firebase.utils"
import { selectCartHidden } from "../../redux/cart/cart.selectors"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import {
  HeaderComponent,
  OptionsContainer,
  OptionLink,
  LogoContainer,
} from "./header.styles"

const Header = ({ currentUser, hidden }) => (
  <HeaderComponent>
    <LogoContainer to="/">
      <Crwn className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
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

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(Header)
