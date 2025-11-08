"use client";

import { NavItem } from "./NavItem";

function Navigation() {
  return (
    <ul className="flex gap-6 text-2xl items-center justify-self-center">
      <NavItem>Shop</NavItem>
      <NavItem>About</NavItem>
    </ul>
  );
}

export { Navigation };
