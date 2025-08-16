import { cookies } from "next/dist/client/components/headers";

export const getCookie = (cookieName: string) => {
    const cStore = cookies();
    const cookie = cStore.get(cookieName);

    if (!cookie) return null;
    const readable = cookie?.name + "=" + cookie?.value;
    return readable;
};

export const getSIDCookieValue = (cookieName: string) => {
    const cStore = cookies();
    const cookie = cStore.get(cookieName);

    if (!cookie) return null;
    return cookie?.value;
};


