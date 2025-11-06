import Link from "next/link";
import Image from "next/image";

import bg from "@/public/background.jpg";

import { TextLogo } from "@/app/(components)/TextLogo";
import { Navigation } from "@/app/(components)/(navbar)/Navigation";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-1 bg-gray-900/85"></div>
      <Image
        src={bg}
        fill
        placeholder="blur"
        alt="Background image"
        className="object-cover object-center -z-2"
      />
      <div className="w-[90%] mx-auto max-w-[1100px] flex flex-col text-gray-300 ">
        <div className="mt-10 flex items-center justify-between">
          <TextLogo />
          <Navigation />
        </div>
        <div className="mt-auto mb-auto self-center flex flex-col">
          <h1 className="text-8xl">-Welcome-</h1>
          <Link
            href="/shop"
            className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer self-center uppercase mt-19 text-xl px-4 py-2 rounded-md text-gray-900 font-bold"
          >
            {/* as property ? */}
            Go to our store
          </Link>
        </div>
      </div>
    </>
  );
}
