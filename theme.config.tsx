
import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import AutoSRTLogo from '@/components/autosrt-logo';
const config: DocsThemeConfig = {
  logo: (
    <span className=" inline-flex gap-2.5 items-center">
      <AutoSRTLogo className="  text-default-900 h-8 w-8 [&>path:nth-child(3)]:text-background [&>path:nth-child(2)]:text-background" />
      <span className="  text-lg font-bold text-default ">AutoSRT</span>
    </span>
  ),
  project: {
    link: "https://github.com/shuding/nextra",
  },
  banner: {
    key: "1.0-release",
    text: (
      <a href="/dashboard" target="_blank">
        🎉 AutoSRT
      </a>
    ),
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://nettasec.com/" target="_blank">
        AutoSRT
        </a>
        .
      </span>
    ),
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
        system: 'System', // Add this line
      };
    },
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – AutoSRT",
    };
  },
};

export default config