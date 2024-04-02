import { createSlice } from "@reduxjs/toolkit";
import { IParameterState } from "entities/TechnologicalParameters/types/types";
import { fetchParametersByTitle } from "entities/TechnologicalParameters/api/fetchParametersByTitle";

const initialState:IParameterState = {
    list: [],
    error: null,
    loading: false,
}

export const parameterSlice = createSlice({
    name: "parameter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchParametersByTitle.fulfilled, (state, action) => {
                state.list = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchParametersByTitle.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchParametersByTitle.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default parameterSlice.reducer