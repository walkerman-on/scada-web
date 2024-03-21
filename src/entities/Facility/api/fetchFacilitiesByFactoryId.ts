import { createAsyncThunk } from "@reduxjs/toolkit"
import { IFacility } from "../types/types"
import { $api } from "shared/api/api"

export const fetchFacilitiesByFactoryId = createAsyncThunk<IFacility, number, {rejectValue: string}>(
	"fetchFacilitiesByFactoryId",
	async (factoryId, { rejectWithValue }) => {
		try {
			const res = await $api.get(`/factory/${factoryId}`)

			if (!res.data) {
				throw new Error("Server Error!")
			}

			return res.data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)