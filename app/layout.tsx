import Image from "next/image";
import bg from "@/public/background.jpg";

import "./globals.css";

import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  title: {
    template: "%s - Shoppy",
    default: "Home - Shoppy",
  },
  description:
    "An online shop that offers everything you need, from physical products to online services, our customers are our strength.",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`w-screen h-screen relative flex ${quicksand.className}`}
      >
        <div className="absolute top-0 left-0 w-full h-full -z-1 bg-gray-900/85"></div>
        <Image
          src={bg}
          fill
          placeholder="blur"
          alt="Background image"
          className="object-cover object-center -z-2"
        />
        {children}
      </body>
    </html>
  );
}
