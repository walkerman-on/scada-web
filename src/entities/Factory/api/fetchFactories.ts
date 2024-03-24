import { createAsyncThunk } from "@reduxjs/toolkit"
import { IFactory } from "../types/types"
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "shared/services/firebase/firebase";

export const fetchFactories = createAsyncThunk<IFactory[] | null, void, {rejectValue: string}>(
	"fetchFactories",
	async (_, { rejectWithValue }) => {
		try {
			const querySnapshot = await getDocs(collection(db, "factories"));
			const factoriesData = querySnapshot.docs.map(doc => doc.data() as IFactory);

			if (querySnapshot.empty) {
				throw new Error("Firebase server Error!")
			}

			return factoriesData
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)