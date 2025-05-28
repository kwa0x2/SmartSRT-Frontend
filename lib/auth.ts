import NextAuth, { User as NextAuthUser } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { cookies } from "next/headers";
import { authType, planType } from "./type";
import { getLoggedInUserServer } from "@/app/api/services/user.service";

interface User extends NextAuthUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
  auth_type: authType;
  plan: planType;
  error: string
}

declare module "next-auth" {
  interface Session {
    user: User;
  }
  interface User {
    phone: string;
    auth_type: authType;
    plan: planType;
    error: string
  }
}

// @ts-ignore
declare module "next-auth/jwt" {
  interface JWT {
    phone?: string;
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  events: {
    signOut() {
      const cookieStore = cookies();
      cookieStore.delete("sid");
      cookieStore.delete("next-auth.session-token");
    }
  },
  callbacks: {
    async session({ token, session }) {
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.phone = token.phone as string;
        session.user.image = token.picture as string;
        session.user.auth_type = token.auth_type as authType;
        session.user.plan = token.plan as planType;
        session.user.error = token.error as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if(user) {
        token.phone = user.phone;
        token.auth_type = user.auth_type;
        token.plan = user.plan;
        token.error = user.error;
      }
      
      if (!token.sub) return token;

      try {
        const existingUser = await getLoggedInUserServer();

        if (!existingUser.Email) {    
          return {
            ...token,
            error: "invalid-session",
          };
        }

        if (existingUser && existingUser.PhoneNumber && existingUser.Plan) {
          token.sub = existingUser.ID
          token.phone = existingUser.PhoneNumber;
          token.plan = existingUser.Plan;
        }

        return token;
      } catch (error) {
        return token;
      }
    },
  },
  session: { 
    strategy: "jwt",
    maxAge: 259200, // 3 day
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
          auth_type: credentials.auth_type as authType,
          plan: credentials.plan as planType,
          error: '' as string
        };
      },
    }),
  ],
});