import { createAsyncThunk } from "@reduxjs/toolkit"
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "shared/services/firebase/firebase";
import { IValveMainInfo} from "../types/types";

export const fetchValves = createAsyncThunk<IValveMainInfo[] | null, void, { rejectValue: string }>(
    "fetchValves",
    async (_, { rejectWithValue }) => {
        try {
            const querySnapshot = await getDocs(collection(db, "valves"));
            
            if (!querySnapshot.empty) {
                const valvesData = querySnapshot.docs.map(doc => {
                    const { facilityId, id, title, collapsedPositionX, collapsedPositionY, expandedPositionX, expandedPositionY } = doc.data().valve as IValveMainInfo;
                    return { facilityId, id, title, collapsedPositionX, collapsedPositionY, expandedPositionX, expandedPositionY}
                });
                
                return valvesData;
            } else {
                throw new Error("Server Error! Can not GET valves");
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);