import { RegisterFormData } from "@/schemas/register.schema";
import axios from "../axios";
import { LoginFormData } from "@/schemas/login.schema";

export const credentialsLogin = async (data: LoginFormData) => {
  return await axios.post("/auth/credentials/login", data);
};

export const register = async (data: RegisterFormData) => {
  return await axios.post("/auth/register", data);
};

export const logout = async () => {
  return await axios.get("/auth/logout");
};

export const otpSend = async (data: { phone_number: string }) => {
  return await axios.post("/auth/otp/send", data);
};

export const forgotPassword = async (email: string) => {
  return await axios.post(`/auth/password/forgot`, { email });
}

export const resetPassword = async (jwt: string, password: string) => {
  return await axios.put(
    `/auth/password/reset`, 
    { password }, 
    {
      headers: {
        Authorization: `${jwt}`
      }
    }
  );
}




