import { createAsyncThunk } from "@reduxjs/toolkit"
import { IParameter } from "../types/types";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "shared/services/firebase/firebase";

export const fetchParametersByTitle = createAsyncThunk<IParameter[] | null, string, {rejectValue: string}>(
	"fetchParametersByTitle",
	async (parameter, { rejectWithValue }) => {
		try {
            const parameterData: IParameter[] = []

            const querySnapshot = await getDocs(collection(db, "valves"));
            const promises = querySnapshot.docs.map(async doc => {
                const pressureData = await getDocs(collection(db, "valves", doc.id, parameter));
                return pressureData.docs.map(innerDoc => innerDoc.data() as IParameter);
            });

            const results = await Promise.all(promises);
            results.forEach(data => {
                parameterData.push(...data);
            });

            if (querySnapshot.empty) {
              throw new Error("Server Error! Can not GET parameters");
            }

            console.log("parameterData -", parameterData)
            return parameterData

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)