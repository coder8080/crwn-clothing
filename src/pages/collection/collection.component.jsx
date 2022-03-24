import { connect } from "react-redux"

import "./collection.styles.scss"
import { selectCollection } from "../../redux/shop/shop.selectors"
import CollectionItem from "../../components/collection-item/collection-item.component"

const CollectionPage = ({ collection: { title, items } }) => {
  console.log(title)
  console.log(items)
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collection)(state),
})

export default connect(mapStateToProps)(CollectionPage)
