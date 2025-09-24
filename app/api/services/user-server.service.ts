import {getCookie} from "@/hooks/get-my-cookie";
import {User, UserWithUsage} from "./user.service";

export const getLoggedInUserServer = async (): Promise<UserWithUsage> => {
  const query = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
    headers: {
      Cookie: `${getCookie(process.env.COOKIE_NAME as string)}`,
    },
  });

  return await query.json() as UserWithUsage;
};

export const logoutServer = async () => {
  const query = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
    headers: {
      Cookie: `${getCookie(process.env.COOKIE_NAME as string)}`,
    },
  });
  return await query.json();
};