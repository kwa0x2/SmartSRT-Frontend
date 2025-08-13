import { ContactFormValues } from "@/schemas/contact.schema";
import axios from "../axios";

export const createContact = async (contact: ContactFormValues) => {
    return axios.post('/contact', contact);
}