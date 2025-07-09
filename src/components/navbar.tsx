import { Link } from "@heroui/link";
// import { Button } from "@heroui/react";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
// import {
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/clerk-react";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">Techra</p>
          </Link>
        </NavbarBrand>
        <div className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2 items-center">
          {/* <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                className="flex relative justify-center items-center bg-transparent px-4 py-2
                border-2 dark:hover:bg-gray-800 border-black dark:border-white
                hover:bg-gray-300"
                size="sm"
              >
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button
                className="flex relative justify-center items-center bg-black px-4 py-2
                dark:hover:bg-white-100 border-black dark:border-white text-white dark:text-black dark:bg-white "
                size="sm"
              >
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut> */}
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn> */}
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          {/* <SignedOut> */}
          <NavbarMenuItem>
            {/* <SignInButton mode="modal">
                <button className="w-full text-left px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90">
                  Sign In
                </button>
              </SignInButton> */}
          </NavbarMenuItem>
          <NavbarMenuItem>
            {/* <SignUpButton mode="modal">
                <button className="w-full text-left px-4 py-2 rounded-md bg-secondary text-white hover:bg-secondary/90">
                  Sign Up
                </button>
              </SignUpButton> */}
          </NavbarMenuItem>
          {/* </SignedOut> */}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
