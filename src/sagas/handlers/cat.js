import { call, put } from "redux-saga/effects"
import { getCatSaga } from '../slices/cat'
import { getCat } from '../api/api'

export function* handleGetCat() {
    try {
        const response = yield call(getCat)
        const url = response[0].url
        yield put(getCatSaga(url))
    } catch(error) {
        console.log(error)
    }
}