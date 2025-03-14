'use server'

import { cookies } from "next/headers";

export const getMyAuthToken = () => {
    const cookieStore = cookies()
    return cookieStore.get("token")?.value
} 