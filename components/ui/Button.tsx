import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

// =====================================================================
// BUTTON · Nefrance · Soft Structuralism
// ---------------------------------------------------------------------
// 3 variants × 2 sizes × suporte a link (interno/externo) ou botão nativo.
// Variant "primary" e "secondary" usam pílula totalmente arredondada com
// "button-in-button": o ícone trailing fica dentro de uma cápsula
// circular nested (group-hover translate + scale).
// Para botões SEM ícone, é só não passar `icon`.
// =====================================================================

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-3 font-mono uppercase tracking-eyebrow rounded-full select-none whitespace-nowrap " +
  "transition-all duration-600 ease-soft " +
  "active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-canvas shadow-elevated hover:shadow-floating hover:-translate-y-[1px] " +
    "[&_.btn-icon]:bg-white/10 [&_.btn-icon]:text-canvas",
  secondary:
    "bg-surface text-ink shadow-soft hover:shadow-elevated hover:-translate-y-[1px] ring-hairline " +
    "[&_.btn-icon]:bg-ink/5 [&_.btn-icon]:text-ink",
  ghost:
    "bg-transparent text-ink hover:bg-ink/5 " +
    "[&_.btn-icon]:bg-ink/5 [&_.btn-icon]:text-ink",
};

const sizes: Record<Size, string> = {
  md: "h-12 pl-6 pr-2 text-eyebrow",
  lg: "h-14 pl-7 pr-2 text-eyebrow-lg",
};

const sizesNoIcon: Record<Size, string> = {
  md: "h-12 px-6 text-eyebrow",
  lg: "h-14 px-8 text-eyebrow-lg",
};

const iconSize: Record<Size, string> = {
  md: "h-9 w-9",
  lg: "h-11 w-11",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Se passar, vira "button-in-button" com ícone trailing nested. */
  icon?: ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
};

type NativeButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

function cn(...parts: (string | undefined | false)[]) {
  return parts.filter(Boolean).join(" ");
}

/** Default trailing arrow — usado quando `icon` é true/omitido em CTA padrão. */
const DefaultArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", size = "md", className, children, icon } = props;
  const hasIcon = icon !== undefined ? Boolean(icon) : true;
  const styles = cn(
    base,
    variants[variant],
    hasIcon ? sizes[size] : sizesNoIcon[size],
    className,
  );

  const content = (
    <>
      <span className="font-mono">{children}</span>
      {hasIcon && (
        <span
          className={cn(
            "btn-icon flex items-center justify-center rounded-full ease-soft transition-all duration-600",
            "group-hover:translate-x-[2px] group-hover:-translate-y-[1px] group-hover:scale-105",
            iconSize[size],
          )}
          aria-hidden
        >
          {icon ?? <DefaultArrow />}
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={styles}>
        {content}
      </Link>
    );
  }

  const {
    variant: _v,
    size: _s,
    className: _c,
    children: _ch,
    icon: _i,
    type,
    ...nativeRest
  } = props as NativeButtonProps;
  void _v; void _s; void _c; void _ch; void _i;

  return (
    <button className={styles} type={type ?? "button"} {...nativeRest}>
      {content}
    </button>
  );
}
