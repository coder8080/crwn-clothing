import { takeEvery as takeLatest, call, put, all } from 'redux-saga/effects'
import { query, collection, getDocs } from 'firebase/firestore'

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
    const q = yield query(collection(firestore, 'collections'))
    const snapshot = yield getDocs(q)
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
