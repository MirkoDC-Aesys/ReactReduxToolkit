import { call, put } from "redux-saga/effects"
import { getCatSagaFulfilled, getCatLoading, getCatRejected } from '../../slices/cat'
import { getCat } from '../../api/api'

export function* handleGetCat() {
    try {
        yield put(getCatLoading())
        const response = yield call(getCat)
        const url = response.data[0].url
        yield put(getCatSagaFulfilled(url))
    } catch (error) {
        console.log(error)
        yield put(getCatRejected())
    }
}