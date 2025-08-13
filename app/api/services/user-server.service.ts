import {getMyCookie} from "@/hooks/get-my-cookie";
import {User} from "./user.service";

export const getLoggedInUserServer = async (): Promise<User> => {
  const query = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
    headers: {
      Cookie: `${getMyCookie()}`,
    },
  });

  return await query.json() as User;
};

export const logoutServer = async () => {
  const query = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
    headers: {
      Cookie: `${getMyCookie()}`,
    },
  });
  return await query.json();
};