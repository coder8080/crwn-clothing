import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

import { fetchCollections } from '../../redux/shop/shop.actions'
import Spinner from '../../components/spinner/spinner.component'

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
)
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
)

const ShopPage = () => {
  const dispatch = useDispatch()
  const { url } = useRouteMatch()

  useEffect(() => {
    dispatch(fetchCollections())
  }, [dispatch])

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${url}`} component={CollectionsOverviewContainer} />
        <Route
          path={`${url}/:collection`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  )
}

export default ShopPage
