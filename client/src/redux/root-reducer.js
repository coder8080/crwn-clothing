import { combineReducers } from 'redux'

import UserReducer from './user/user-reducer'
import CartReducer from './cart/cart-reducer'
import DirectoryReducer from './directory/directory-reducer'
import ShopReducer from './shop/shop-reducer'

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: DirectoryReducer,
  shop: ShopReducer,
})

export default rootReducer
