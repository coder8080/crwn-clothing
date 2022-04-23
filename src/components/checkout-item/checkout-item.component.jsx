import { useDispatch } from 'react-redux'

import './checkout-item.styles.scss'
import {
  deleteCartItem,
  decreaseCartItem,
  addCartItem,
} from '../../redux/cart/cart.actions'

const CheckoutItem = ({ item }) => {
  let { imageUrl, name, price } = item
  const dispatch = useDispatch()
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="item-block">{name}</span>
      <span className="item-block">${price}</span>
      <span className="item-block">
        <div className="arrow" onClick={() => dispatch(decreaseCartItem(item))}>
          &#10094;
        </div>
        <span className="value">{item.quantity}</span>
        <div className="arrow" onClick={() => dispatch(addCartItem(item))}>
          &#10095;
        </div>
      </span>
      <div
        className="item-block"
        onClick={() => dispatch(deleteCartItem(item))}
      >
        X
      </div>
    </div>
  )
}

export default CheckoutItem
