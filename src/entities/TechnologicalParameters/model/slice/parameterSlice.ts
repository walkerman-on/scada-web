import { createSlice } from "@reduxjs/toolkit";
import { IParameterState } from "entities/TechnologicalParameters/types/types";
import { fetchParametersByFacilityId } from "entities/TechnologicalParameters/api/fetchParametersByFacilityId";

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
            .addCase(fetchParametersByFacilityId.fulfilled, (state, action) => {
                state.list = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchParametersByFacilityId.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchParametersByFacilityId.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default parameterSlice.reducer