"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Cart } from "./Cart";

interface ItemProps {
  children: string;
}

function Navigation() {
  const pathname = usePathname();
  const isActive = pathname.startsWith("/cart");

  return (
    <ul className="flex gap-6 text-2xl items-center">
      <Item>Shop</Item>
      <Item>About</Item>
      <Item>Contact</Item>
      <Link
        href="/cart"
        className={` duration-150 ${
          isActive
            ? "text-emerald-500 hover:text-emerald-600"
            : "hover:text-gray-400"
        }`}
      >
        <Cart />
      </Link>
    </ul>
  );
}

function Item({ children }: ItemProps) {
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

export { Navigation };
