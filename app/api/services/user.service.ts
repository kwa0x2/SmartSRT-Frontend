import { getMyCookie } from "@/hooks/get-my-cookie";
import axios from "../axios";
import { authType, roleType } from "@/lib/type";

export interface User {
    ID: string;           // bson ObjectID
    Name: string;
    Email: string;
    PhoneNumber: string;
    Password?: string;    
    AvatarURL?: string;   
    Role: roleType;
    AuthType?: authType;  
    LastLogin?: string;   
    CreatedAt: string;   
    UpdatedAt: string;    
    DeletedAt?: string;   
}

export const getLoggedInUserServer = async (): Promise<User> => {
  const query = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
    headers: {
      Cookie: `${getMyCookie()}`,
    },
  });

  const response = await query.json();
  return response as User;
};

export const getLoggedInUser = async () => {
  return await axios.get<User>(`/user/me`);
};

export const CheckEmailExists = async (email: string) => {
  return await axios.head(`/user/exists/email/${email}`);
};

export const CheckPhoneExists = async (phone: string) => {
  return await axios.head(`/user/exists/phone/${phone}`);
};