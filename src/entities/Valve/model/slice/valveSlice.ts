import { createSlice } from "@reduxjs/toolkit";
import { fetchValves } from "entities/Valve/api/fetchValves";
import { fetchValvesById } from "entities/Valve/api/fetchValvesById";
import { IValveState } from "entities/Valve/types/types";

const initialState:IValveState = {
    list: [],
    error: null,
    loading: false,
    currentValve: null,
}

export const valveSlice = createSlice({
    name: "valve",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchValves.fulfilled, (state, action) => {
                state.list = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchValves.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchValves.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            .addCase(fetchValvesById.fulfilled, (state, action) => {
                state.currentValve = state?.list.find(item => item.id === action.payload.id)
                state.loading = false
                state.error = null
            })
            .addCase(fetchValvesById.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchValvesById.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default valveSlice.reducer