import Link from "next/link";

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600",
  secondary:
    "bg-slate-900 text-white hover:bg-slate-700 focus-visible:ring-slate-900",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-400",
};

export function Button({
  as = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const styles = `${baseStyles} ${variants[variant] ?? variants.primary} ${className}`.trim();

  if (as === "link") {
    return (
      <Link className={styles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
