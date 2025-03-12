import { getMyCookie } from "@/hooks/get-my-cookie";
import axios from "../axios";

export const getLoggedInUserServer = async () => {
  const query = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
    headers: {
      Cookie: `${getMyCookie()}`,
    },
  });

  const response = await query.json();
  return response;
};

export const getLoggedInUser = async () => {
  return await axios.get(`/user/me`);
};

export const CheckEmailExists = async (email: string) => {
  return await axios.head(`/user/exists/email/${email}`);
};

export const CheckPhoneExists = async (phone: string) => {
  return await axios.head(`/user/exists/phone/${phone}`);
};
