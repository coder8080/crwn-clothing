import { Route } from "react-router-dom"

import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import CollectionPage from "../collection/collection.component"

const ShopPage = ({ match: { url } }) => (
  <div className="shop-page">
    <Route exact path={`${url}`} component={CollectionsOverview} />
    <Route path={`${url}/:collection`} component={CollectionPage} />
  </div>
)

export default ShopPage
