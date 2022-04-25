import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'
import './collection.styles.scss'

const CollectionPage = () => {
  const params = useParams()
  const collection = useSelector((state) =>
    selectCollection(params.collection)(state)
  )

  return (
    <div className="collection-page">
      <h2 className="title">{collection?.title}</h2>
      <div className="items">
        {collection?.items.map((item) => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default CollectionPage
