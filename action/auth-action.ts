"use server";
import { signIn, signOut } from "@/lib/auth";
import { cookies } from "next/headers";
import { logout, logoutServer } from "@/app/api/services/auth.service";

export const loginAction = async (
  id: string,
  name: string,
  email: string,
  phone: string,
  avatar: string,
  auth_type: string,
  role: string
) => {
  try {
    const result = await signIn("credentials", {
      id,
      name,
      email,
      phone,
      avatar,
      auth_type,
      role,
      redirect: false,
    });

    if (result?.error) {
      console.error("signIn error:", result.error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Login action error:", error);
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
    console.error("Logout action error:", error);
    const cookieStore = cookies();
    cookieStore.delete("sid");
    return await signOut({ redirect: false });
  }
}
