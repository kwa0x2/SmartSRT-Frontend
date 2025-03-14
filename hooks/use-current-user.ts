import { useSession } from "next-auth/react";

//#region Client-Side Current User Hook
export function useCurrentUser() {
  const { data: session, status } = useSession();

  return {
    user: session?.user,
    isLoading: status === "loading",
    error: status === "unauthenticated" ? new Error("Not authenticated") : null
  };
}
//#endregion