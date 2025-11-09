import Link from "next/link";
import Image from "next/image";

import { TextLogo } from "@/app/(components)/TextLogo";
import { Button } from "@/app/(components)/Button";

import bg from "@/public/background.jpg";

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
          <Link href="/shop" className="mt-19">
            <Button className="shadow-2xl text-xl sm:text-2xl">
              Go to our store
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
