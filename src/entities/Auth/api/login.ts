import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { Md5 } from "ts-md5";

const BASE_URL = "https://lk.ktk.gubkin.ru/api2"
const AUTH_URL = `${BASE_URL}/Auth`
const SEED_URL = `${AUTH_URL}/Seed`
const TOKEN_URL = `${AUTH_URL}/Token`

export const login = createAsyncThunk<string, {login: string, password: string}, {rejectValue: string}>(
	"login",
	async ({login, password}, { rejectWithValue }) => {
		try {
            const url = `${SEED_URL}?login=${login}`

            const {data: seedMixture} = await axios.get(url);
            
            //
            const hash = Md5.hashStr(Md5.hashStr(password).concat(seedMixture));
            console.log({hash})

            const token = await axios.post(TOKEN_URL, {
                body: JSON.stringify({login, password}),
                headers: {
                    "Content-Type": "text/plain",
                    "Accept" : "application/json, text/plain, */*",
                    "Accept-Encoding" : "gzip, deflate, br, zstd",
                    "Connection" : "keep-alive",
                    "Content-Length": "72"
                },
            })   
            console.log({token}) 
            
            return token.data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
