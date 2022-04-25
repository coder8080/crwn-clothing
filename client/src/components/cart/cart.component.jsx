import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg'
import { useSelector, useDispatch } from 'react-redux'

import { toggleHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import './cart.styles.scss'

const Cart = () => {
  const cartItemsCount = useSelector(selectCartItemsCount)
  const dispatch = useDispatch()
  return (
    <div className="cart" onClick={() => dispatch(toggleHidden())}>
      <ShoppingBagIcon className="cart-icon" />
      <span className="cart-count">{cartItemsCount}</span>
    </div>
  )
}

export default Cart
