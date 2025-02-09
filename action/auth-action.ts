'use server'
import { signIn, signOut } from "@/lib/auth";

export const loginAction = async (id: string, name: string, email: string, phone: string, avatar: string) => {
    await signIn("credentials", {
      id,
      name,
      email,
      phone,
      avatar,
      redirectTo: "/en/home",
    });
};

export async function logoutAction() {
  await signOut();
}