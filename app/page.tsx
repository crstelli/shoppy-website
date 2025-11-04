import { TextLogo } from "@/app/(components)/TextLogo";
import { Navigation } from "@/app/(components)/Navigation";

export default function Home() {
  return (
    <div className="w-[90%] mx-auto max-w-[1100px] flex flex-col text-gray-300 ">
      <div className="mt-10 flex items-center justify-between">
        <TextLogo />
        <Navigation />
      </div>
      <div className="mt-auto mb-auto self-center flex flex-col">
        <h1 className="text-8xl">-Welcome-</h1>
        <button className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer self-center uppercase mt-10 text-xl px-4 py-1 rounded-md text-gray-900 font-bold">
          Go to our store
        </button>
      </div>
    </div>
  );
}
