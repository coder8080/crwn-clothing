import { connect } from "react-redux";

import "./checkout-item.styles.scss";
import { deleteCartItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, deleteCartItem }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="item-block">{name}</span>
      <span className="item-block">{price}</span>
      <span className="item-block">{quantity}</span>
      <div className="item-block" onClick={() => deleteCartItem(item)}>
        X
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteCartItem: (item) => dispatch(deleteCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
