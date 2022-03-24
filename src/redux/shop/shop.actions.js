import ShopActionTypes from './shop.types'
import { firestore } from '../../firebase/firebase.utils'
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

const getCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

const getCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
})

const getCollectionsFailure = (error) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error,
})

export const getCollections = () => (dispatch) => {
  dispatch(getCollectionsStart())
  const collectionRef = firestore.collection('collections')

  collectionRef
    .get()
    .then(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      dispatch(getCollectionsSuccess(collectionsMap))
    })
    .catch((e) => {
      dispatch(getCollectionsFailure(e))
    })
}
