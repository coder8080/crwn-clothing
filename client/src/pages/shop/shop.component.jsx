import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

import { fetchCollections } from '../../redux/shop/shop.actions'
import Spinner from '../../components/spinner/spinner.component'
import { selectLoadingError } from '../../redux/shop/shop.selectors'
import Errors from '../../components/errors/errors.component'

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
)
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
)

const ShopPage = () => {
  const dispatch = useDispatch()
  const { url } = useRouteMatch()
  const error = useSelector(selectLoadingError)

  useEffect(() => {
    dispatch(fetchCollections())
  }, [dispatch])
  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        {error ? (
          <Errors
            errors={[
              'Failed loading data. Ensure that you have a stable internet connection',
            ]}
          />
        ) : (
          <>
            <Route
              exact
              path={`${url}`}
              component={CollectionsOverviewContainer}
            />
            <Route
              path={`${url}/:collection`}
              component={CollectionPageContainer}
            />
          </>
        )}
      </Suspense>
    </div>
  )
}

export default ShopPage
