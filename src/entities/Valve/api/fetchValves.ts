import { createAsyncThunk } from "@reduxjs/toolkit"
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "shared/services/firebase/firebase";
import { IValves } from "../types/types";

export const fetchValves = createAsyncThunk<IValves[] | null, void, {rejectValue: string}>(
	"fetchValves",
	async (_, { rejectWithValue }) => {
		try {
			const querySnapshot = await getDocs(collection(db, "valves"));
			const valvesData = querySnapshot.docs.map(doc => doc.data() as IValves);

			if (querySnapshot.empty) {
				throw new Error("Server Error! Can not GET valves")
			}

            console.log(valvesData)

			return valvesData
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)