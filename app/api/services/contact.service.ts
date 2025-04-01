import { ContactFormValues } from "@/schemas/contact.schema";
import axios from "../axios";


export const createContact = async (contact: ContactFormValues) => {
    const response = await axios.post('/contact', contact);
    return response.data;
}



