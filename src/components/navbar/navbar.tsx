"use client";

import NextLink from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import NAV_LINKS from "@/data/nav-links";
import ContactButton from "../hero/contact-button";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <NavigationMenu className="fixed left-0 top-0 w-full max-w-full border-b bg-background/80 p-2 shadow backdrop-blur sm:left-1/2 sm:top-5 sm:max-w-max sm:-translate-x-1/2 sm:rounded-lg sm:border">
      <NavigationMenuList className="flex-wrap sm:flex-nowrap">
        {NAV_LINKS.map(({ name, path }, i) => (
          <NavigationMenuItem className="" key={path}>
            <Link
              active={false}
              className="bg-transparent focus:bg-transparent focus:ring-1 focus:ring-primary active:bg-transparent"
              href={path}
            >
              {name}
            </Link>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <ContactButton>
            <Button>Contact</Button>
          </ContactButton>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function Link({
  href,
  children,
  active = false,
  className = "",
}: {
  href: string;
  active?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <NavigationMenuLink
        className={cn(
          navigationMenuTriggerStyle(),
          active ? "text-primary" : "text-muted-foreground",
          className,
        )}
        active={active}
      >
        {children}
      </NavigationMenuLink>
    </NextLink>
  );
}
