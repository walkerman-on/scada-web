import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { IFactory } from "../types/types"
import { $api } from "shared/api/api";

export const fetchFactories = createAsyncThunk<IFactory[], void, {rejectValue: string}>(
	"fetchFactories",
	async (_, { rejectWithValue }) => {
		try {
			const res = await $api.get("/factory")

			if (!res.data) {
				throw new Error("Server Error!")
			}

			return res.data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)