import { RegisterFormData } from "@/schemas/register.schema";
import axios from "../axios";
import { LoginFormData } from "@/schemas/login.schema";
import { getMyCookie } from "@/lib/get-my-cookie";

export const createUser = async (data: RegisterFormData) => {
  return await axios.post("/auth/create", data);
};
export const credentialsSignIn = async (data: LoginFormData) => {
  return await axios.post("/auth/credentials/sign-in", data);
};

export const getLoggedInUserServer = async () => {
  const query = await fetch(`http://localhost:9000/api/v1/auth/check`, {
    headers: {
      Cookie: `${getMyCookie()}`,
    },
  });
  const response = await query.json();
  return response;
};

export const getLoggedInUser = async () => {
  return await axios.get(`/auth/check`);
};

export const IsEmailExists = async (email: string) => {
  return await axios.post(`/auth/email-exists`, { email });
}

export const IsPhoneExists = async (phone_number: string) => {
  return await axios.post(`/auth/phone-exists`, { phone_number });
}