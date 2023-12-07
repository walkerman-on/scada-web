import axios from "axios";

export default class api {
    static async getAll() {
        try {
            const response = await axios.get("http://localhost:3001/facility")
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}