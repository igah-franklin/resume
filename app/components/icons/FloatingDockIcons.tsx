
'use client'

import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockIcons() {
  const links = [
    // {
    //   title: "Home",
    //   icon: (
    //     <IconHome className="h-full w-full text-neutral-500 dark:text-yellow-700" />
    //   ),
    //   href: "/",
    // },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-yellow-700" />
      ),
      href: "https://www.linkedin.com/in/igah-franklin/",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-yellow-700" />
      ),
      href: "https://x.com/digital_padi",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-yellow-700" />
      ),
      href: "https://github.com/igah-franklin",
    },
  ];
  return (
    <div className="">
      <FloatingDock
        mobileClassName="" 
        items={links}
      />
    </div>
  );
}
