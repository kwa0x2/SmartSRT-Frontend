import { getLoggedInUserServer } from "@/app/api/services/auth.service";
import NextAuth, { User as NextAuthUser } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { cookies } from "next/headers";

interface User extends NextAuthUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
}

declare module "next-auth" {
  interface Session {
    user: User;
  }
  interface User {
    phone: string;
  }
}

// @ts-ignore
declare module "next-auth/jwt" {
  interface JWT {
    phone?: string;
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async jwt({ token, user }) {
      if(user){
        token.phone = user.phone;
      }
      if (!token.sub) return token;

      const existingUser = await getLoggedInUserServer();
      console.log("existingUser", existingUser);
      if (!existingUser.Email) {
        cookies().delete(process.env.COOKIE_NAME as string);
        await signOut();
      }

      if (existingUser && existingUser.PhoneNumber && existingUser.AvatarURL) {
        token.phone = existingUser.PhoneNumber;
        token.picture = existingUser.AvatarURL;
      }

      return token;
    },
    async session({ token, session }) {
      if (session.user) {
        session.user.phone = token.phone as string;
      }
      return session;
    },
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        return {
          id: credentials.id as string,
          name: credentials.name as string,
          email: credentials.email as string,
          phone: credentials.phone as string,
          image: credentials.avatar as string,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
});
