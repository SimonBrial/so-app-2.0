import { Link } from "wouter";
import type { IconNavbarProps } from "../../types/interface";

export default function IconNavbar({ dir, ...props }: IconNavbarProps) {
  return (
    <Link
      href={dir}
      className="flex items-center gap-2 hover:bg-iconBackground/20 hover:dark:bg-iconBackground-dark text-branding-3 dark:text-branding-2 hover:inset-shadow-custom active:inset-shadow-custom px-5 py-4 rounded-2xl  hover:text-branding-1 transition-all"
    >
      <props.icon className="size-9" />
      {/* <span className="">{label}</span> */}
    </Link>
  );
}
