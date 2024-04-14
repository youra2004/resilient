"use client";

import { Logo } from "./logo";
import { ModeToggle } from ".";
import { Separator } from "../ui/separator";
import { NavLink } from "./nav-link";
import { MobileNav } from "./mobile-nav";
import { HeaderTitle } from "./header-title";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();

  if (pathName === "/sign-up") {
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-between p-6 max-w-7xl	mx-auto">
        <div className="sm:flex-1">
          <Logo />
        </div>

        <div className="hidden sm:flex gap-4 flex-1 justify-center items-center">
          <NavLink
            href="/courses"
            className="text-lg hover:text-muted-foreground transition-colors"
          >
            Courses
          </NavLink>

          <NavLink
            href="/services"
            className="text-lg hover:text-muted-foreground transition-colors"
          >
            Services
          </NavLink>
          <Link
            href="/create-resource"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 py-2 px-4 whitespace-nowrap"
          >
            Create +
          </Link>
        </div>

        <HeaderTitle />

        <div className="hidden sm:flex gap-4 items-center flex-1 justify-end">
          <ModeToggle />
          <span>Name Surname</span>
        </div>

        <div className="flex sm:hidden">
          <MobileNav />
        </div>
      </div>
      <Separator />
    </>
  );
};
