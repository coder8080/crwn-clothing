import { Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container'
import { fetchCollections } from '../../redux/shop/shop.actions'

const ShopPage = () => {
  const dispatch = useDispatch()
  const { url } = useRouteMatch()

  useEffect(() => {
    dispatch(fetchCollections())
  }, [dispatch])

  return (
    <div className="shop-page">
      <Route exact path={`${url}`} component={CollectionsOverviewContainer} />
      <Route path={`${url}/:collection`} component={CollectionPageContainer} />
    </div>
  )
}

export default ShopPage
