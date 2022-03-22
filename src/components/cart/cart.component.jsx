import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import './cart.styles.scss'

const Cart = ({ toggleHidden, cartItemsCount }) => (
  <div className="cart" onClick={toggleHidden}>
    <ShoppingBagIcon className="cart-icon" />
    <span className="cart-count">{cartItemsCount}</span>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
})

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
