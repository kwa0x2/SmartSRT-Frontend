import { cookies } from "next/dist/client/components/headers";

export const getMyCookie = () => {
  const cStore = cookies();
  const cookie = cStore.get(process.env.COOKIE_NAME as string);

  if (!cookie) return null;
  const readable = cookie?.name + "=" + cookie?.value;
  return readable;
};


