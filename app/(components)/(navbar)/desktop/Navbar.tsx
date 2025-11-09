import Link from "next/link";
import Image from "next/image";

import { auth } from "@/app/(lib)/auth";
import logo from "@/public/logo.svg";

import { Navigation } from "./Navigation";
import { Cart } from "../Cart";
import { MobileNavbar } from "../mobile/MobileNavbar";
import { Login } from "../../Login";

import { User } from "lucide-react";

async function Navbar() {
  const session = await auth();

  return (
    <>
      <MobileNavbar />
      <nav className="max-[520px]:hidden grid grid-cols-3 items-center shadow-2xl bg-gray-800 rounded-full px-10 py-2">
        <Link href="/" className="justify-self-start">
          <Image
            src={logo}
            alt="Comprany logo"
            width={42}
            height={42}
            className="hover:rotate-45 duration-400"
          />
        </Link>
        <Navigation />
        {session?.user ? (
          <div className="flex justify-self-end items-center gap-6">
            <Link href="/cart" className="hover:text-gray-400">
              <Cart />
            </Link>
            <Link href={"/account/home"}>
              {session.user?.image ? (
                <div className="relative w-[42px] aspect-square">
                  <Image
                    fill
                    src={session.user.image}
                    alt="Image of the user"
                    className="rounded-full border-2 border-gray-400 hover:scale-105 duration-150"
                  />
                </div>
              ) : (
                <User />
              )}
            </Link>
          </div>
        ) : (
          <Login />
        )}
      </nav>
    </>
  );
}

export { Navbar };
