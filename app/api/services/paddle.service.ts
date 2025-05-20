import axios from "../axios";

export const createCustomerPortalSession = async () => {
    return await axios.get("/paddle/customer-portal")
}