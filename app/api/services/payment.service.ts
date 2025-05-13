import axios from "../axios";

export const createCustomer = async () => {
    return await axios.post("/paddle/customer")
}

export interface CreateCheckoutBody {
    PlanID: string
}

export const createCheckout = async (customer: CreateCheckoutBody) => {
    return await axios.post("/paddle/checkout", customer)
}