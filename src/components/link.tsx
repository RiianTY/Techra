import { Link as RouterLink, LinkProps as RouterLinkProps, useLocation } from "react-router-dom";
import { tv } from "tailwind-variants";
import clsx from "clsx";

const link = tv({
  base: "text-foreground hover:opacity-80 transition-opacity",
  variants: {
    color: {
      foreground: "text-foreground",
      primary: "text-primary",
      danger: "text-danger",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    color: "foreground",
    size: "md",
  },
});

export interface LinkProps extends Omit<RouterLinkProps, "color"> {
  color?: "foreground" | "primary" | "danger";
  size?: "sm" | "md" | "lg";
  disableActiveStyle?: boolean;
}

export const Link = ({ className, color, size, to, disableActiveStyle = false, ...props }: LinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to && !disableActiveStyle;

  return (
    <RouterLink
      className={clsx(
        link({ color, size }),
        isActive && "text-primary font-medium",
        className
      )}
      data-active={isActive}
      to={to}
      {...props}
    />
  );
};
