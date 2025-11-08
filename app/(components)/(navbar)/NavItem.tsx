"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: string;
}

function NavItem({ children }: Props) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/${children.toLocaleLowerCase()}`);

  return (
    <li>
      <Link
        className={` duration-150 ${
          isActive
            ? "text-emerald-500 hover:text-emerald-600"
            : "hover:text-gray-400"
        }`}
        href={`/${children.toLocaleLowerCase()}`}
      >
        {children}
      </Link>
    </li>
  );
}

export { NavItem };
