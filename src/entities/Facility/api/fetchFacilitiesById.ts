import { createAsyncThunk } from "@reduxjs/toolkit"
import { IFacility } from "../types/types"
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "shared/services/firebase/firebase";

export const fetchFacilitiesById = createAsyncThunk<IFacility, number, {rejectValue: string}>(
	"fetchFacilitiesById",
	async (facilityId, { rejectWithValue }) => {
		try {
			const facilitiesCollectionRef = collection(db, 'facilities');
			const facilityQuery = query(facilitiesCollectionRef, where('id', '==', facilityId));
			const querySnapshot = await getDocs(facilityQuery);

			if (!querySnapshot.empty) {
				const facilityData = querySnapshot.docs[0].data() as IFacility;
       			return facilityData;		
			} else {
				throw new Error("Server Error! Can not GET facilities by ID")
			}

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)