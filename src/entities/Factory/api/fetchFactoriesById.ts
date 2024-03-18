import { createAsyncThunk } from "@reduxjs/toolkit"
import { IFactory } from "../types/types"
import { $api } from "shared/api/api";

export const fetchFactoriesById = createAsyncThunk<IFactory, number, {rejectValue: string}>(
	"fetchFactoriesById",
	async (id, { rejectWithValue }) => {
		try {
			const res = await $api.get(`/factory/${id}`)

			if (!res.data) {
				throw new Error("Server Error!")
			}

			return res.data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)