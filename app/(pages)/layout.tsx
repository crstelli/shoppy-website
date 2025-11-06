import "@/app/(styles)/globals.css";
import { CartProvider } from "../(contexts)/CartContext";
import { Outfit } from "next/font/google";

import { Navbar } from "@/app/(components)/(navbar)/Navbar";

interface Props {
  children: React.ReactNode;
}

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`w-full min-h-screen bg-gray-900 text-gray-300 py-10 flex flex-col ${outfit.className}`}
      >
        <CartProvider>
          <div className="w-[90%] max-w-[1100px] flex flex-col h-full mx-auto grow">
            <Navbar />
            <main className="flex flex-col grow">{children}</main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
