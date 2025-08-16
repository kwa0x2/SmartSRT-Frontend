import { RegisterFormData } from "@/schemas/register.schema";
import axios from "../axios";
import { LoginFormData } from "@/schemas/login.schema";

export const credentialsLogin = async (data: LoginFormData) => {
  return axios.post("/auth/credentials/login", data);
};

export const register = async (data: RegisterFormData) => {
  return axios.post("/auth/register", data);
};

export const logout = async () => {
  return axios.get("/auth/logout");
};

export const otpSend = async (data: { phone_number: string }) => {
  return axios.post("/auth/otp/send", data);
};

export const forgotPassword = async (email: string) => {
  return axios.post("/auth/account/password/forgot", { email });
};

export const resetPassword = async (jwt: string, password: string) => {
  return axios.put(
      "/auth/account/password/reset",
      { password },
      {
        headers: {
          Authorization: jwt,
        },
      }
  );
};

export const deleteAccountRequest = async () => {
  return axios.get("/auth/account/delete/request");
};

export const deleteAccount = async (jwt: string) => {
  return axios.delete("/auth/account", {
    headers: {
      Authorization: jwt,
    },
  });
};

export const getCheckAuth = async () => {
  const response = await fetch('/api/auth/check-auth');
  return await response.json();
};
