import { Logo } from "./logo";
import { ModeToggle } from ".";
import { Separator } from "../ui/separator";
import { NavLink } from "./nav-link";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between p-6 max-w-7xl	mx-auto">
        <div className="flex-1">
          <Logo />
        </div>

        <div className="flex gap-4 flex-1 justify-center items-center">
          <NavLink
            href="courses"
            className="text-lg hover:text-muted-foreground transition-colors"
          >
            Courses
          </NavLink>

          <Separator orientation="vertical" className="h-4" />

          <NavLink
            href="services"
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

        <div className="flex gap-4 items-center flex-1 justify-end">
          <ModeToggle />
          <span>Name Surname</span>
        </div>
      </div>
      <Separator />
    </>
  );
};
