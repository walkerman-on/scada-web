import { createAsyncThunk } from "@reduxjs/toolkit"
import { IFacility } from "../types/types"
import { $api } from "shared/api/api"

export const fetchFacilitiesByFactoryId = createAsyncThunk<IFacility, number, {rejectValue: string}>(
	"fetchFacilitiesByFactoryId",
	async (facilityId, { rejectWithValue }) => {
		try {
			const res = await $api.get(`/facility/${facilityId}`)

			if (!res.data) {
				throw new Error("Server Error!")
			}

			return res.data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)