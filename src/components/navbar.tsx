import { useState } from "react";
import { Link } from "@/components/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

interface NavbarProps {
  maxWidth?: "xl" | "2xl" | "full";
  position?: "static" | "sticky" | "fixed";
  className?: string;
}

interface NavbarContentProps {
  className?: string;
  justify?: "start" | "center" | "end";
  children: React.ReactNode;
}

interface NavbarItemProps {
  className?: string;
  children: React.ReactNode;
}

interface NavbarBrandProps {
  className?: string;
  children: React.ReactNode;
}

interface NavbarMenuProps {
  isOpen: boolean;
  children: React.ReactNode;
}

interface NavbarMenuItemProps {
  children: React.ReactNode;
}

const NavbarContent = ({ className, justify = "start", children }: NavbarContentProps) => {
  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  }[justify];

  return (
    <div className={clsx("flex items-center gap-2", justifyClass, className)}>
      {children}
    </div>
  );
};

const NavbarItem = ({ className, children }: NavbarItemProps) => {
  return <div className={clsx("flex items-center", className)}>{children}</div>;
};

const NavbarBrand = ({ className, children }: NavbarBrandProps) => {
  return <div className={clsx("flex items-center", className)}>{children}</div>;
};

interface NavbarMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const NavbarMenuToggle = ({ isOpen, onToggle }: NavbarMenuToggleProps) => {
  return (
    <button
      type="button"
      className="sm:hidden p-2 rounded-lg hover:bg-default-100 transition-colors"
      aria-label="Toggle menu"
      onClick={onToggle}
    >
      {isOpen ? (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  );
};

const NavbarMenu = ({ isOpen, children }: NavbarMenuProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="sm:hidden absolute top-full left-0 right-0 bg-background border-b border-divider shadow-lg z-50">
      {children}
    </div>
  );
};

const NavbarMenuItem = ({ children }: NavbarMenuItemProps) => {
  return <div className="py-2">{children}</div>;
};

export const Navbar = ({ maxWidth = "xl", position = "sticky", className }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const maxWidthClass = {
    xl: "max-w-7xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
  }[maxWidth];

  const positionClass = {
    static: "static",
    sticky: "sticky top-0 z-50",
    fixed: "fixed top-0 left-0 right-0 z-50",
  }[position];

  return (
    <nav
      className={clsx(
        "w-full flex flex-col bg-background border-b border-divider",
        positionClass,
        className
      )}
    >
      <div className={clsx("w-full mx-auto px-4 sm:px-6 lg:px-8", maxWidthClass)}>
        <div className="flex items-center justify-between h-16">
          <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
            <NavbarBrand className="gap-3 max-w-fit">
              <Link
                className="flex justify-start items-center gap-1"
                color="foreground"
                to="/"
                disableActiveStyle
              >
                <Logo />
                <p className="font-bold text-inherit">Rivara</p>
              </Link>
            </NavbarBrand>
            <div className="hidden sm:flex gap-4 justify-start ml-2">
              {siteConfig.navItems.map((item) => (
                <NavbarItem key={item.href}>
                  <Link
                    className={clsx(
                      "text-foreground hover:text-[#00b7fa] transition-colors",
                      "data-[active=true]:text-[#00b7fa] data-[active=true]:font-medium"
                    )}
                    color="foreground"
                    to={item.href}
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
              <ThemeSwitch />
            </NavbarItem>
          </NavbarContent>

          <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
            <ThemeSwitch />
            <NavbarMenuToggle isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
          </NavbarContent>
        </div>
      </div>

      <NavbarMenu isOpen={isMenuOpen}>
        <div className="mx-4 mt-2 flex flex-col gap-2 pb-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.href}-${index}`}>
              <Link
                className={index === 2 ? "!text-[#00b7fa]" : undefined}
                color={
                  index === 2
                    ? "foreground"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                to={item.href}
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </nav>
  );
};
