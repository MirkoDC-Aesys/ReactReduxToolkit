import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCat } from '../api/api'

const initialState = ''

export const getCatImg = createAsyncThunk(
    'cat/getCatImgUrl',
    async () => {
        const response = await getCat()
        return response.data
    }
)

const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers:{
        getCatSaga: {}
    },
    extraReducers: builder => {
        builder.addCase(getCatImg.pending, (state) => {
            return state = 'https://media1.tenor.com/images/8f7a28e62f8242b264c8a39ba8bea261/tenor.gif?itemid=15922897'
        })
        builder.addCase(getCatImg.fulfilled, (state, action) => {
            return state = action.payload[0].url
        })
        builder.addCase(getCatImg.rejected, (state) => {
            return state = 'https://i.ytimg.com/vi/KuLFXr7OPpc/hqdefault.jpg'
        })
    }
})

export const { getCatSaga } = catSlice.actions
export const catSelector = state => state.cat
export default catSlice.reducer