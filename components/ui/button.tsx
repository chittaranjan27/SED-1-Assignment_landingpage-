import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

type ButtonProps = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  leftIcon?: string;
  rightIcon?: string;
  loading?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
};

const variantStyles = {
  primary:
    "bg-primary text-white hover:bg-primary-hover active:bg-primary-dark shadow-[var(--shadow-2)]",
  secondary:
    "border border-primary/35 bg-white text-primary hover:bg-primary/5 active:bg-primary/10",
  ghost:
    "bg-primary/10 text-primary hover:bg-primary/15 active:bg-primary/20",
  link: "bg-transparent text-primary hover:text-primary-hover px-0 py-0",
};

const sizeStyles = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-base",
};

export function Button({
  label,
  href,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  loading,
  disabled,
  ariaLabel,
}: ButtonProps) {
  const content = (
    <>
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : null}
      {!loading && leftIcon ? (
        <Icon name={leftIcon} className="h-4 w-4" aria-hidden="true" />
      ) : null}
      <span>{label}</span>
      {!loading && rightIcon ? (
        <Icon name={rightIcon} className="h-4 w-4" aria-hidden="true" />
      ) : null}
    </>
  );

  return (
    <Link
      href={disabled ? "#" : href}
      aria-label={ariaLabel ?? label}
      aria-disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 focus-visible:outline-none",
        variantStyles[variant],
        sizeStyles[size],
        disabled && "pointer-events-none bg-neutral-grey-blue/20 text-neutral-grey-blue",
      )}
    >
      {content}
    </Link>
  );
}
