import { createAsyncThunk } from "@reduxjs/toolkit"
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "shared/services/firebase/firebase";
import { IValve } from "../types/types";

export const fetchValvesById = createAsyncThunk<IValve[], string, {rejectValue: string}>(
	"fetchValvesById",
	async (valveId, { rejectWithValue }) => {
		try {
			const querySnapshot = await getDocs(collection(db, "valves"));
            
            if (!querySnapshot.empty) {
                const valvesData = querySnapshot.docs
                    .filter(doc => doc.data().valve.id === valveId)
                    .map(doc => {
						const {valve, parameters} = doc.data()
						return {valve, parameters}
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

// const { facilityId, id, title } = doc.data().valve;
                    // return { facilityId, id, title }; 
                // const valvesData = querySnapshot.docs.map(doc => {
				// 	console.log(doc.data())
                //     const { facilityId, id, title } = doc.data().valve;
                //     return { facilityId, id, title }; 