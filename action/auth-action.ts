"use server";
import { signIn, signOut } from "@/lib/auth";
import { cookies } from "next/headers";
import { logoutServer } from "@/app/api/services/user-server.service";

export const loginAction = async (
    id: string,
    name: string,
    email: string,
    phone: string,
    avatar: string,
    auth_type: string,
    plan: string,
    usage_limit: number
) => {
  try {
    const result = await signIn("credentials", {
      id,
      name,
      email,
      phone,
      avatar,
      auth_type,
      plan,
      usage_limit,
      redirect: false,
    });

    if (result?.error) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};

export async function logoutAction() {
  try {
    await logoutServer();

    const cookieStore = cookies();
    cookieStore.delete("sid");

    return await signOut({ redirect: false });
  } catch (error) {
    const cookieStore = cookies();
    cookieStore.delete("sid");
    return await signOut({ redirect: false });
  }
}
