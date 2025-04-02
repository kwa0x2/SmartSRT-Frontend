import { RegisterFormData } from "@/schemas/register.schema";
import axios from "../axios";
import { LoginFormData } from "@/schemas/login.schema";
import { getMyCookie } from "@/hooks/get-my-cookie";

export const credentialsLogin = async (data: LoginFormData) => {
  return await axios.post("/auth/credentials/login", data);
};

export const register = async (data: RegisterFormData) => {
  return await axios.post("/auth/register", data);
};

export const logout = async () => {
  return await axios.get("/auth/logout");
};

export const logoutServer = async () => {
  const query = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
    headers: {
      Cookie: `${getMyCookie()}`,
    },
  });
  const response = await query.json();
  return response; 
} 

export const otpSend = async (data: { phone_number: string }) => {
  return await axios.post("/auth/otp/send", data);
};

export const forgotPassword = async (email: string) => {
  return await axios.post(`/auth/account/password/forgot`, { email });
}

export const resetPassword = async (jwt: string, password: string) => {
  return await axios.put(
    `/auth/account/password/reset`, 
    { password }, 
    {
      headers: {
        Authorization: `${jwt}`
      }
    }
  );
}

export const deleteAccountRequest = async () => {
  return await axios.get(`/auth/account/delete/request`);
}

export const deleteAccount = async (jwt: string) => {
  return await axios.delete(
    `/auth/account`, 
    {
      headers: {
        Authorization: `${jwt}`
      }
    }
  );
}



