import { createSlice } from "@reduxjs/toolkit";
import { fetchFactories } from "entities/Factory/api/fetchFactories";
import {IFactoryState} from "../../types/types"

const initialState:IFactoryState = {
    list: [],
    error: null,
    loading: false
}

export const factorySlice = createSlice({
    name: "factory",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFactories.fulfilled, (state, action) => {
                state.list = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchFactories.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchFactories.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default factorySlice.reducer