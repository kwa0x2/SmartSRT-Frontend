import axios from "../axios";

export const createCustomerPortalSession = async () => {
    return axios.get("/paddle/customer-portal");
}

export const getPriceData = async (priceID: string) => {
    return axios.get(`/paddle/price/${priceID}`);
}