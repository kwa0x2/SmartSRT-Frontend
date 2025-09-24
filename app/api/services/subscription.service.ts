import axios from "../axios"

export const getRemainingDays = async () => {
    return axios.get("/subscription/remaining-days");
}