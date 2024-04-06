import { createAsyncThunk } from "@reduxjs/toolkit"
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "shared/services/firebase/firebase";
import { IParameters } from "../types/types";

export const fetchParametersByFacilityId = createAsyncThunk<IParameters[] | null, string, {rejectValue: string}>(
	"fetchParametersByFacilityId",
	async (facilityId, { rejectWithValue }) => {
		try {const querySnapshot = await getDocs(collection(db, "valves"));
            
            if (!querySnapshot.empty) {
                const parametersData = querySnapshot.docs
                    .filter(doc => doc.data().valve.facilityId === facilityId)
                    .map(doc => {
						const {pressure, flow, pressureDrop, temperature, valveOpening, collapsedPositionX, collapsedPositionY, expandedPositionX, expandedPositionY} = doc.data().parameters as IParameters
						return {pressure, flow, pressureDrop, temperature, valveOpening, collapsedPositionX, collapsedPositionY, expandedPositionX, expandedPositionY}
					});

            return parametersData;
            } else {
                throw new Error("Server Error! Can not GET parameters");
            }

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)