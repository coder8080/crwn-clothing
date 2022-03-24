import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectCollectionsArray } from "../../redux/shop/shop.selectors"
import CollectionPreview from "../../components/collection-preview/collection-preview.component"

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsArray,
})

export default connect(mapStateToProps)(CollectionsOverview)
