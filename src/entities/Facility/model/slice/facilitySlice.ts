import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchFacilities } from "entities/Facility/api/fetchFacilities";
import { fetchFacilitiesById } from "entities/Facility/api/fetchFacilitiesById";
import {fetchFacilitiesByFactoryId} from "entities/Facility/api/fetchFacilitiesByFactoryId"
import {IFacility, IFacilityState} from "../../types/types"

const initialState:IFacilityState = {
    list: [],
    error: null,
    loading: false,
    currentFacility: null
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

            .addCase(fetchFacilitiesById.fulfilled, (state, action) => {
                state.currentFacility = state?.list.find(item => item.id === action.payload.id)
                state.loading = false
                state.error = null
            })
            .addCase(fetchFacilitiesById.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchFacilitiesById.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            .addCase(fetchFacilitiesByFactoryId.fulfilled, (state, action) => {
                state.list = state.list?.filter(item => item.factoryId == action.payload.id)
                state.loading = false
                state.error = null
            })
            .addCase(fetchFacilitiesByFactoryId.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchFacilitiesByFactoryId.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default facilitySlice.reducer