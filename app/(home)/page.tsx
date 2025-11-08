import Link from "next/link";
import Image from "next/image";

import bg from "@/public/background.jpg";
import { TextLogo } from "@/app/(components)/TextLogo";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-1 bg-gray-900/90"></div>
      <Image
        src={bg}
        fill
        placeholder="blur"
        alt="Background image"
        className="object-cover object-center -z-2"
      />
      <div className="w-[90%] mx-auto max-w-[1100px] flex flex-col text-gray-300 ">
        <div className="mt-10 bg-gray-800 shadow-2xl py-2 rounded-full flex items-center justify-center">
          <TextLogo />
        </div>
        <div className="mt-auto mb-auto text-center self-center flex flex-col">
          <h1 className="text-6xl text-white">The Shopping</h1>
          <br />
          <h2 className="text-4xl uppercase font-thin">Made Right</h2>
          <Link
            href="/shop"
            className="bg-emerald-500 shadow-2xl hover:bg-emerald-600 cursor-pointer self-center uppercase mt-19 text-xl px-4 py-2 rounded-md text-gray-900 font-bold"
          >
            Go to our store
          </Link>
        </div>
      </div>
    </>
  );
}
