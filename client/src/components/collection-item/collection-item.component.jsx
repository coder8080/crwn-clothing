import { useDispatch } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import { addCartItem } from '../../redux/cart/cart.actions'
import './collection-item.styles.scss'

const CollectionItem = ({ id, name, imageUrl, price }) => {
  const dispatch = useDispatch()
  return (
    <div className="collection-item">
      <div className="image-container">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <CustomButton
          onClick={() => dispatch(addCartItem({ id, name, imageUrl, price }))}
        >
          ADD TO CART
        </CustomButton>
      </div>
      <div className="collection-footer">
        <span className="name">{name.toUpperCase()}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  )
}

export default CollectionItem
