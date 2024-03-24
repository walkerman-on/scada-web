import { createAsyncThunk } from "@reduxjs/toolkit"
import { IFactory } from "../types/types"
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "shared/services/firebase/firebase";

export const fetchFactoriesById = createAsyncThunk<IFactory | null, number, {rejectValue: string}>(
	"fetchFactoriesById",
	async (factoryId, { rejectWithValue }) => {
		try {
			const factoriesCollectionRef = collection(db, 'factory');
			const factoryQuery = query(factoriesCollectionRef, where('id', '==', factoryId));
			const querySnapshot = await getDocs(factoryQuery);

			if (!querySnapshot.empty) {
				const factoryData = querySnapshot.docs[0].data() as IFactory;
       			return factoryData;		
			} else {
				throw new Error("Firebase server Error!")
			}
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)