import "./collection-item.styles.scss"
import CustomButton from "../custom-button/custom-button.component"
import { addCartItem } from "../../redux/cart/cart.actions"
import { connect } from "react-redux"

const CollectionItem = ({ id, name, imageUrl, price, addCartItem }) => {
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
          onClick={() => addCartItem({ id, name, imageUrl, price })}
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

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
