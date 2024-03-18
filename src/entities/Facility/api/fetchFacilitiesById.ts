import { createAsyncThunk } from "@reduxjs/toolkit"
import { IFacility } from "../types/types"
import { $api } from "shared/api/api"

export const fetchFacilitiesById = createAsyncThunk<IFacility, number, {rejectValue: string}>(
	"fetchFacilitiesById",
	async (id, { rejectWithValue }) => {
		try {
			const res = await $api.get(`/facility/${id}`)

			if (!res.data) {
				throw new Error("Server Error!")
			}

			return res.data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)