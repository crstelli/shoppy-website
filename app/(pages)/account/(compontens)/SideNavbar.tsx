"use client";

import { signOutAction } from "@/app/(lib)/signOut";
import { NavItem } from "./NavItem";

import { Home, Package, Settings, LogOut } from "lucide-react";

function SideNavbar() {
  return (
    <ul className="bg-gray-800 flex flex-col rounded-md h-full py-10 border border-gray-700">
      <NavItem Icon={Home}>Home</NavItem>
      <NavItem Icon={Package}>Orders</NavItem>
      <NavItem Icon={Settings}>Settings</NavItem>
      <form className="hover:bg-gray-900 mt-auto" action={signOutAction}>
        <button
          type="submit"
          className="cursor-pointer flex items-center gap-3 px-4 md:px-10 py-4 text-gray-400"
        >
          <LogOut />
          <span className="max-md:hidden">Sign out</span>
        </button>
      </form>
    </ul>
  );
}

export { SideNavbar };
