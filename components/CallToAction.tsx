import Link from "next/link";
import { ReactNode } from "react";

interface CallToActionProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  download?: boolean;
  className?: string;
}

export function CallToAction({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className = "",
}: CallToActionProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-zinc-900 text-white shadow-lg hover:bg-zinc-800 hover:shadow-xl dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 focus:ring-zinc-900 dark:focus:ring-zinc-100",
    secondary:
      "border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 focus:ring-zinc-900 dark:focus:ring-zinc-100",
    ghost:
      "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 focus:ring-zinc-500",
  };

  const linkProps = {
    className: `${baseStyles} ${variantStyles[variant]} ${className}`,
    ...(external && { target: "_blank", rel: "noopener noreferrer" }),
    ...(download && { download: true }),
  };

  return (
    <Link href={href} {...linkProps}>
      {children}
    </Link>
  );
}
