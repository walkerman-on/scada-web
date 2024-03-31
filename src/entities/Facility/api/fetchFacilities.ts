import { createAsyncThunk } from "@reduxjs/toolkit"
import { IFacility, IFacilityMainInfo } from "../types/types"
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "shared/services/firebase/firebase";

export const fetchFacilities = createAsyncThunk<IFacilityMainInfo[], void, {rejectValue: string}>(
	"fetchFacilities",
	async (_, { rejectWithValue }) => {
		try {
			const querySnapshot = await getDocs(collection(db, "facilities"));
			const facilitiesData = querySnapshot.docs.map(doc => {
				const {id, factoryId, title, enabled, visible} = doc.data();

				return {id, factoryId, title, enabled, visible} as IFacilityMainInfo;
			});

			if (querySnapshot.empty) {
				throw new Error("Server Error! Can not GET facilities")
			}

			return facilitiesData
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
