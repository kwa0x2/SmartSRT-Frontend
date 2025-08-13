import axios from "../axios";

export const createCustomerPortalSession = async () => {
    return axios.get("/paddle/customer-portal");
}