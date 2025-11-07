import Link from "next/link";
import Image from "next/image";
import { auth, signIn } from "@/app/(lib)/auth";

import logo from "@/public/logo.svg";
import { Navigation } from "./Navigation";

async function Navbar() {
  const session = await auth();

  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        <Image
          src={logo}
          alt="Comprany logo"
          width={52}
          height={52}
          className="hover:rotate-45 duration-400"
        />
      </Link>
      <div className="flex items-center gap-4">
        <Navigation />
        {session?.user ? (
          <Link href={"/account/home"}>
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={session.user.image ?? undefined}
                alt="Image of the user"
                className="size-8 rounded-full"
              />
              <span>{session.user.name}</span>
            </div>
          </Link>
        ) : (
          <form
            className="bg-gray-950 px-4 py-2 rounded-md"
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/account/home" });
            }}
          >
            <button type="submit" className="cursor-pointer">
              Sign in with Google
            </button>
          </form>
        )}
      </div>
    </nav>
  );
}

export { Navbar };
