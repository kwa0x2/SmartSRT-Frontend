"use server";
import { signIn, signOut } from "@/lib/auth";
import { cookies } from "next/headers";

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
  const cookieStore = cookies();

  cookieStore.delete("sid");

  return await signOut({redirect: false});
}
