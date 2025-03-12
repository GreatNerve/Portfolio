"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import Link from "next/link";

import { Logo } from "@/components";
import { Menu, X } from "lucide-react";
import ProjectNavItems from "./ProjectNavItems";
import ThemeButton from "./ThemeButton";
import { useNavbar } from "./useNavbar";

import { RefObject } from "react";

const NavBar = () => {
  const { isMenuOpen, navRef, projectsRef, handleMenuToggle } = useNavbar();

  return (
    <div
      className="sticky top-0 z-50 bg-background text-foreground shadow-md shadow-border inset-x-0 py-2  border-b border-border/50 "
      ref={navRef as RefObject<HTMLDivElement>}
    >
      <NavigationMenu className="w-full max-w-[2400px] block px-4 md:px-8 mx-auto">
        <NavigationMenuList className="font-medium justify-between items-center">
          <NavigationMenuItem>
            <button
              onClick={() => handleMenuToggle()}
              className="flex items-center justify-center md:hidden"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </NavigationMenuItem>
          <NavigationMenuItem className="">
            <Link
              href="/"
              className={cn(navigationMenuTriggerStyle(), "w-32 md:w-auto")}
            >
              <Logo className="h-8 w-12" />
            </Link>
          </NavigationMenuItem>

          <li
            className={cn(
              "bg-background absolute top-[50px] -inset-x-4 z-2 h-auto pb-1 flex-grow md:p-0 md:static md:flex shadow-md shadow-border md:shadow-none md:bg-transparent md:rounded-none rounded-b-md",
              isMenuOpen ? "" : "hidden"
            )}
          >
            <ul className=" md:flex md:static md:flex-grow md:items-center md:justify-start">
              <NavigationMenuItem className=" mx-4 md:mx-1 my-4 md:my-1">
                <ProjectNavItems ref={projectsRef} name="Projects" />
              </NavigationMenuItem>

              <NavigationMenuItem className="mx-4 my-4 md:my-1 md:mx-1">
                <Link
                  href="/contact"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "w-full text-lg md:text-base font-medium"
                  )}
                >
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </ul>
          </li>
          <NavigationMenuItem className="">
            <ThemeButton />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;
