import Link from "next/link";

const variants = {
  primary:
    "bg-accent text-background hover:bg-[#d8bc89]",

  secondary:
    "border border-border text-foreground hover:border-accent hover:text-accent",

  ghost:
    "text-muted hover:text-accent",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const styles = `
    inline-flex items-center justify-center gap-2
    rounded-full font-medium
    transition-all duration-300
    focus-visible:outline-2 focus-visible:outline-offset-4
    focus-visible:outline-accent
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  if (href) {
  // Use native anchors for same-page navigation
  if (href.startsWith("#")) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }

  // Use Next.js Link for actual page navigation
  return (
    <Link href={href} className={styles} {...props}>
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