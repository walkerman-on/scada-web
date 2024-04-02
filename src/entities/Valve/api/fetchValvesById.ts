import { createAsyncThunk } from "@reduxjs/toolkit"
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "shared/services/firebase/firebase";
import { IValves } from "../types/types";

export const fetchValvesById = createAsyncThunk<IValves, string, {rejectValue: string}>(
	"fetchValvesById",
	async (valveId, { rejectWithValue }) => {
		try {
			const valvesCollectionRef = collection(db, 'valves');
			const valveQuery = query(valvesCollectionRef, where('id', '==', valveId));
			const querySnapshot = await getDocs(valveQuery);

			if (!querySnapshot.empty) {
				const valveData = querySnapshot.docs[0].data() as IValves;
       			return valveData;		
			} else {
				throw new Error("Server Error! Can not GET valves by ID")
			}
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)