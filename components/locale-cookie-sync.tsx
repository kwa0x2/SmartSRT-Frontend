"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function LocaleCookieSync() {
  const locale = useLocale();

  useEffect(() => {
    Cookies.set('NEXT_LOCALE', locale, { expires: 365, path: '/', sameSite: 'Lax' });
  }, [locale]);

  return null;
}
