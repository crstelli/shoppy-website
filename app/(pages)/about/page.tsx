import Image from "next/image";
import { Title } from "../../(components)/Title";

export const metadata = {
  title: "About Us",
};

export default function page() {
  return (
    <>
      <Title>About Us</Title>
      <div className="grid grid-cols-5 gap-20 mt-10 items-center text-gray-400">
        <div className="aspect-square col-span-2 w-full relative">
          <div className="absolute top-0 left-0 w-full h-full z-1 bg-gray-900/40"></div>
          <Image
            src={"/about-1.jpg"}
            fill
            className="object-cover object-center shadow-2xl"
            alt="Image of the shop"
          ></Image>
        </div>
        <div className="col-span-3 text-lg text-end grid grid-rows-[auto_1fr_1fr] gap-10">
          <h3 className="text-emerald-600 text-4xl">Quality Above All</h3>
          <p>
            In our online store, you’ll find a wide range of products carefully
            selected to ensure the highest quality and a safe, enjoyable
            shopping experience. Every day, we strive to offer reliable,
            affordable items that meet your needs, paying attention to every
            detail—from choosing trusted suppliers to delivering your order with
            care.
          </p>
          <p>
            Your satisfaction is our top priority. Shopping with us means
            choosing professionalism, honesty, and a customer service team
            always ready to help with courtesy and expertise. We believe that
            true quality makes the difference, and we work hard to make it
            accessible to everyone.
          </p>
        </div>
        <div className="col-span-2 text-lg grid grid-rows-[auto_1fr_1fr] gap-10">
          <h3 className="text-emerald-600 text-4xl">
            Always Fresh, Always for You
          </h3>
          <p>
            We regularly update our catalog with new arrivals and great offers.
            Every item is chosen to guarantee quality and style.
          </p>
          <p>
            Each order is prepared with care and shipped fast, because we want
            your shopping experience to be easy and enjoyable.
          </p>
        </div>
        <div className="aspect-video col-span-3 w-full relative">
          <div className="absolute top-0 left-0 w-full h-full z-1 bg-gray-900/40"></div>
          <Image
            src="/about-2.jpg"
            fill
            alt="Another image of the shop"
            className="object-cover object-center shadow-2xl"
          ></Image>
        </div>
        <h2 className="col-span-full justify-self-center text-5xl font-serif text-white border-b-3 px-6 py-2 border-emerald-500">
          Quality and trust, delivered to you
        </h2>
      </div>
    </>
  );
}
