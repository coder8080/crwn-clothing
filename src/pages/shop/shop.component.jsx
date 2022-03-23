import CollectionPreview from "../../components/collection-preview/collection-preview.component"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

import { selectCollections } from "../../redux/shop/shop.selectors"

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map((collection) => (
      <CollectionPreview
        key={collection.id}
        title={collection.title}
        items={collection.items}
      />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
})

export default connect(mapStateToProps)(ShopPage)
