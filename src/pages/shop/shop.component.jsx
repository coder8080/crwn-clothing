import { Route } from 'react-router-dom'
import { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import { getCollections } from '../../redux/shop/shop.actions'
import withSpinner from '../../components/with-spinner/with-spinner.component'
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'

class ShopPage extends Component {
  componentDidMount() {
    const { getCollections } = this.props
    getCollections()
  }

  render() {
    const {
      match: { url },
    } = this.props
    const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview)
    const CollectionPageWithSpinner = withSpinner(CollectionPage)
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${url}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={!this.props.isCollectionsLoaded}
              {...props}
            />
          )}
        />
        <Route
          path={`${url}/:collection`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!this.props.isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsLoaded: selectIsCollectionsLoaded,
})

const mapDispatchToProps = (dispatch) => ({
  getCollections: () => dispatch(getCollections()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
