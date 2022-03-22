import './checkout-item.styles.scss'

const CheckoutItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt={name} />
    </div>
    <span className="item-block">{name}</span>
    <span className="item-block">{price}</span>
    <span className="item-block">{quantity}</span>
    <div className="item-block">X</div>
  </div>
)

export default CheckoutItem
