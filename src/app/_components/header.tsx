"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBriefcase,
  IconCertificate,
  IconHome,
  IconPhoneCall,
} from "@tabler/icons-react";
import Link from "next/link";

export function Header() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "Project",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Skills",
      icon: (
        <IconCertificate className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {

      title: "Contact",
      icon: (
        <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    }
    
  ];
  return (
    <header className=" w-full items-center pt-16">
      <div className="flex justify-between space-x">
        <div className="flex justify-start items-center">
          <Link href={"/"}><h2 className="text-white font-mono text-xl ml-3">Libert Paolo</h2></Link>
          
        </div>
        <div className="mr-3">
          <FloatingDock items={links} />
        </div>
      </div>
    </header>
  );
}
