import { useSelector } from 'react-redux'

import { selectCollectionsArray } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsArray)
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

export default CollectionsOverview
