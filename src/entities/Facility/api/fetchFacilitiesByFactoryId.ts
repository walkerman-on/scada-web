import { createAsyncThunk } from "@reduxjs/toolkit"
import { IFacility } from "../types/types"
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "shared/services/firebase/firebase";
import { IFactory } from "entities/Factory/types/types";

export const fetchFacilitiesByFactoryId = createAsyncThunk<IFactory, number, {rejectValue: string}>(
	"fetchFacilitiesByFactoryId",
	async (factoryId, { rejectWithValue }) => {
		try {
			const factoriesCollectionRef = collection(db, 'factories');
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