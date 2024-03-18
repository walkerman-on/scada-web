import { createSlice } from "@reduxjs/toolkit";
import { fetchFactories } from "entities/Factory/api/fetchFactories";
import { fetchFactoriesById } from "entities/Factory/api/fetchFactoriesById";
import {IFactoryState} from "../../types/types"

const initialState:IFactoryState = {
    list: [],
    error: null,
    loading: false,
    currentFactory: null
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

            .addCase(fetchFactoriesById.fulfilled, (state, action) => {
                state.currentFactory = state.list?.find(item => item.id === action.payload.id)
                state.loading = false
                state.error = null
            })
            .addCase(fetchFactoriesById.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchFactoriesById.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default factorySlice.reducer