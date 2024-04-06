import { createAsyncThunk } from "@reduxjs/toolkit"
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "shared/services/firebase/firebase";
import { IValveMainInfo } from "../types/types";

export const fetchValvesByFacilityId = createAsyncThunk<IValveMainInfo[] | null, string, {rejectValue: string}>(
	"fetchValvesByFacilityId",
	async (facilityId, { rejectWithValue }) => {
		try {
			const querySnapshot = await getDocs(collection(db, "valves"));
            
            if (!querySnapshot.empty) {
                const valvesData = querySnapshot.docs
                    .filter(doc => doc.data().valve.facilityId === facilityId)
                    .map(doc => {
						const {title, facilityId, id, collapsedPositionX, collapsedPositionY, expandedPositionX, expandedPositionY} = doc.data().valve as IValveMainInfo
						return {title, facilityId, id, collapsedPositionX, collapsedPositionY, expandedPositionX, expandedPositionY}
					});
                    
                     return valvesData;
            } else {
                throw new Error("Server Error! Can not GET valve");
            }
		
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)