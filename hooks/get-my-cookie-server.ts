'use server'

import { cookies } from "next/headers";

export const getCookieServer = async (token: string) => {
    const cookieStore = cookies()
    return cookieStore.get(token)?.value
}
