import { Route } from 'react-router-dom'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container'
import { fetchCollections } from '../../redux/shop/shop.actions'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'

const ShopPage = ({ getCollections, match: { url } }) => {
  useEffect(() => {
    getCollections()
  }, [getCollections])

  return (
    <div className="shop-page">
      <Route exact path={`${url}`} component={CollectionsOverviewContainer} />
      <Route path={`${url}/:collection`} component={CollectionPageContainer} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  isCollectionsLoaded: selectIsCollectionsLoaded,
})

const mapDispatchToProps = (dispatch) => ({
  getCollections: () => dispatch(fetchCollections()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
