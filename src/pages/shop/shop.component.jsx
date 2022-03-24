import { Route } from "react-router-dom"
import { Component } from "react"
import { connect } from "react-redux"

import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import CollectionPage from "../collection/collection.component"
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils"
import { updateCollections } from "../../redux/shop/shop.actions"
import withSpinner from "../../components/with-spinner/with-spinner.component"

class ShopPage extends Component {
  unsubscribeFromSnapshot = null
  state = { loading: true }

  componentDidMount() {
    const { updateCollections } = this.props
    this.unsubscribeFromSnapshot = firestore
      .collection("collections")
      .onSnapshot(async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        updateCollections(collectionsMap)
        this.setState({ loading: false })
      })
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot()
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
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
        <Route
          path={`${url}/:collection`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ShopPage)
