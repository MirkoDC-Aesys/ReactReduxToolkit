import { takeLatest } from 'redux-saga/effects'
import { handleGetCat } from './handlers/cat'
import { getCatSaga } from '../slices/cat'

export function* watcherSaga() {
    yield takeLatest(getCatSaga.type, handleGetCat)
}