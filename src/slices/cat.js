import { createSlice } from '@reduxjs/toolkit'
const initialState = ''

const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {
        getCatLoading: (state) => {
            return state = 'https://media1.tenor.com/images/8f7a28e62f8242b264c8a39ba8bea261/tenor.gif?itemid=15922897'
        },
        getCatSaga: (state) => {
            return state = ''
        },
        getCatSagaFulfilled: (state, action) => {
            return state = action.payload
        }
    }
})

export const { getCatSaga, getCatSagaFulfilled, getCatLoading } = catSlice.actions
export const catSelector = state => state.cat
export default catSlice.reducer