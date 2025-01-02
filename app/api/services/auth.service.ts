import { RegisterFormData } from "@/schemas/register.schema";
import axios from "../axios";
import { LoginFormData } from "@/schemas/login.schema";
import { getMyCookie } from "@/lib/get-my-cookie";

export const credentialsSignUp = async (data: RegisterFormData) => {
  return await axios.post("/auth/credentials/signup", data);
};
export const credentialsSignIn = async (data: LoginFormData) => {
  return await axios.post("/auth/credentials/signin", data);
};

export const getLoggedInUserServer = async () => {
  const query = await fetch(`${process.env.API_URL}/auth/check`, {
    headers: {
      Cookie: `${getMyCookie()}`,
    },
  });
  const response = await query.json();
  return response;
};
