import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incremented: state => state += 1,
        decremented: state => state -= 1
    }
})

export const { incremented, decremented } = counterSlice.actions
export const counterSelector = state => state.counter
export default counterSlice.reducer