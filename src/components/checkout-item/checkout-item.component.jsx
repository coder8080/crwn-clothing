import { connect } from "react-redux"

import "./checkout-item.styles.scss"
import {
  deleteCartItem,
  decreaseCartItem,
  addCartItem,
} from "../../redux/cart/cart.actions"

const CheckoutItem = ({
  item,
  deleteCartItem,
  increaseCartItem,
  decreaseCartItem,
}) => {
  let { imageUrl, name, price } = item
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="item-block">{name}</span>
      <span className="item-block">${price}</span>
      <span className="item-block">
        <div className="arrow" onClick={() => decreaseCartItem(item)}>
          &#10094;
        </div>
        <span className="value">{item.quantity}</span>
        <div className="arrow" onClick={() => increaseCartItem(item)}>
          &#10095;
        </div>
      </span>
      <div className="item-block" onClick={() => deleteCartItem(item)}>
        X
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  deleteCartItem: (item) => dispatch(deleteCartItem(item)),
  decreaseCartItem: (item) => dispatch(decreaseCartItem(item)),
  increaseCartItem: (item) => dispatch(addCartItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
