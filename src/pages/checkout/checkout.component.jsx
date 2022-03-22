import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './checkout.styles.scss'
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = ({ cartTotal, cartItems }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    <div className="checkout-items">
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <div className="total">
      <span>total: ${cartTotal}</span>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage)
