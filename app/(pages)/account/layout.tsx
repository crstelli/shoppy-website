"use client";

import { usePathname } from "next/navigation";
import { Title } from "../(components)/Title";
import Link from "next/link";
import { signOutAction } from "@/app/(lib)/signOut";

interface LayoutProps {
  children: React.ReactNode;
}

interface NavProps {
  children: string;
  classes?: React.ComponentProps<"div">["className"];
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Title>Account</Title>
      <div className="grid grid-cols-[auto_1fr] grow">
        <ul className="bg-gray-800 flex flex-col rounded-md h-full border border-gray-700">
          <NavItem>Home</NavItem>
          <NavItem>Orders</NavItem>
          <NavItem>Settings</NavItem>
          <form
            className="hover:bg-gray-900 px-10 py-4 cursor-pointer mt-auto"
            action={signOutAction}
          >
            <button type="submit" className="cursor-pointer">
              Sign out
            </button>
          </form>
        </ul>
        <div className="p-6">{children}</div>
      </div>
    </>
  );
}

function NavItem({ children, classes }: NavProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/account/${children.toLowerCase()}`);

  return (
    <Link href={children.toLowerCase()}>
      <li
        className={`hover:bg-gray-900 px-10 py-4 cursor-pointer ${classes} ${
          isActive && "bg-gray-900"
        }`}
      >
        {children}
      </li>
    </Link>
  );
}
