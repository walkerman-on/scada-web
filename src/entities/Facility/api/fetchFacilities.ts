import { createAsyncThunk } from "@reduxjs/toolkit"
import { IFacility } from "../types/types"
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "shared/services/firebase/firebase";

export const fetchFacilities = createAsyncThunk<IFacility[], void, {rejectValue: string}>(
	"fetchFacilities",
	async (_, { rejectWithValue }) => {
		try {
			const querySnapshot = await getDocs(collection(db, "facilities"));
			const facilitiesData = querySnapshot.docs.map(doc => doc.data() as IFacility);

			if (querySnapshot.empty) {
				throw new Error("Server Error! Can not GET facilities")
			}

			return facilitiesData
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
