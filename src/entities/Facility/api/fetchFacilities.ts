import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { IFacility } from "../types/types"
import { $api } from "shared/api/api"

export const fetchFacilities = createAsyncThunk<IFacility[], void, {rejectValue: string}>(
	"fetchFacilities",
	async (_, { rejectWithValue }) => {
		try {
			const res = await $api.get("/facility")

			if (!res.data) {
				throw new Error("Server Error!")
			}

			return res.data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)