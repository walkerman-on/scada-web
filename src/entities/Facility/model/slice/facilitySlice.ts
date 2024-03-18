import { createSlice } from "@reduxjs/toolkit";
import { fetchFacilities } from "entities/Facility/api/fetchFacilities";
import {IFacilityState} from "../../types/types"

const initialState:IFacilityState = {
    list: [],
    error: null,
    loading: false
}

export const facilitySlice = createSlice({
    name: "facility",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFacilities.fulfilled, (state, action) => {
                state.list = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchFacilities.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchFacilities.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default facilitySlice.reducer