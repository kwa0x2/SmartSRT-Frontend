"use client";

import * as React from "react"
import { cn } from "@/lib/utils"
import { Link as ScrollLink } from "react-scroll";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { useTranslations } from "next-intl";

const Navigation = () => {
  const t = useTranslations('Header.navigation');

  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex space-x-6 text-sm uppercase tracking-wide font-bold">
        <NavigationMenuItem>
          <ScrollLink
            to="pricing"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
          >
            {t('pricing')}
          </ScrollLink>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <ScrollLink
            to="developers"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
          >
            API
          </ScrollLink>
        </NavigationMenuItem> */}

        <NavigationMenuItem>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
          >
            {t('contact')}
          </ScrollLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navigation; 