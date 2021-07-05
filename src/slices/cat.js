import { createSlice } from '@reduxjs/toolkit'
const initialState = ''

const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {
        getCatSaga: (state) => {
            return state
        },
        getCatLoading: (state) => {
            return state = 'https://media1.tenor.com/images/8f7a28e62f8242b264c8a39ba8bea261/tenor.gif?itemid=15922897'
        },
        getCatSagaFulfilled: (state, action) => {
            return state = action.payload
        },
        getCatRejected: (state) => {
            return state = 'https://i.ytimg.com/vi/KuLFXr7OPpc/hqdefault.jpg'
        }
    }
})

export const { getCatSaga, getCatSagaFulfilled, getCatLoading, getCatRejected } = catSlice.actions
export const catSelector = state => state.cat
export default catSlice.reducer