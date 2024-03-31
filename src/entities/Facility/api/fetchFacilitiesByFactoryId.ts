import { createAsyncThunk } from "@reduxjs/toolkit"
import { IFacilityMainInfo } from "../types/types"
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "shared/services/firebase/firebase";

export const fetchFacilitiesByFactoryId = createAsyncThunk<IFacilityMainInfo[] | null, string, {rejectValue: string}>(
	"fetchFacilitiesByFactoryId",
	async (factoryId, { rejectWithValue }) => {
		try {
			const facilitiesCollectionRef = collection(db, 'facilities');
			const facilityQuery = query(facilitiesCollectionRef, where('factoryId', '==', factoryId));
			const querySnapshot = await getDocs(facilityQuery);
			
			if (!querySnapshot.empty) {
				const facilitiesData = querySnapshot.docs.map(doc => {
				const { id, title, visible, enabled } = doc.data(); 

                return { id, title, visible, enabled } as IFacilityMainInfo;
				});

       			return facilitiesData;	
			} else {
				throw new Error("Server Error! Can not GET facilities by factory ID")
			}
		
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)