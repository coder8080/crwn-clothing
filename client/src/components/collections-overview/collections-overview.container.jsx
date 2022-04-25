import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionsOverview from './collections-overview.component'
import { selectIsCollectionsLoading } from '../../redux/shop/shop.selectors'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsLoading,
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer
