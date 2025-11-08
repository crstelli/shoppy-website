import Link from "next/link";
import Image from "next/image";

import { auth, signIn } from "@/app/(lib)/auth";
import logo from "@/public/logo.svg";

import { Navigation } from "./Navigation";
import { User } from "lucide-react";
import { Cart } from "./Cart";

async function Navbar() {
  const session = await auth();

  return (
    <nav className="grid grid-cols-3 shadow-2xl bg-gray-800 rounded-full px-10 py-2">
      <Link href="/">
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
        <div className="flex justify-self-end items-center gap-6 cursor-pointer">
          <Link href="/cart">
            <Cart />
          </Link>
          <Link href={"/account/home"}>
            {session.user?.image ? (
              <div className="relative w-[42px] aspect-square">
                <Image
                  fill
                  src={session.user.image}
                  alt="Image of the user"
                  className="rounded-full border border-gray-600 hover:scale-105 duration-150"
                />
              </div>
            ) : (
              <User />
            )}
          </Link>
        </div>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/account/home" });
          }}
        >
          <button
            type="submit"
            className="bg-gray-900 hover:bg-gray-950 duration-150 px-4 py-1 rounded-md cursor-pointer text-lg"
          >
            Log In
          </button>
        </form>
      )}
    </nav>
  );
}

export { Navbar };
