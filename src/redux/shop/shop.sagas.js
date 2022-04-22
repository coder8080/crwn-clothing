import { takeEvery as takeLatest, call, put, all } from 'redux-saga/effects'

import ShopActionTypes from './shop.types'
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'
import {
  getCollectionsStart,
  getCollectionsSuccess,
  getCollectionsFailure,
} from './shop.actions'

export function* fetchCollectionsAsync() {
  yield put(getCollectionsStart())
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(getCollectionsSuccess(collectionsMap))
  } catch (e) {
    yield put(getCollectionsFailure(e))
  }
}

export function* fetchCollections() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS, fetchCollectionsAsync)
}

export function* shopSagas() {
  yield all([call(fetchCollections)])
}
