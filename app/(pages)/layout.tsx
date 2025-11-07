import "@/app/(styles)/globals.css";
import { Outfit } from "next/font/google";
import { CartProvider } from "../(contexts)/CartContext";

import { Navbar } from "@/app/(components)/(navbar)/Navbar";
import { Footer } from "@/app/(components)/Footer";
import { Toaster } from "react-hot-toast";

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
        className={`w-full min-h-screen bg-gray-900 text-gray-300 flex flex-col ${outfit.className}`}
      >
        <Toaster
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
        <CartProvider>
          <div className="w-[90%] max-w-[1100px] min-h-screen flex flex-col py-10 mx-auto grow">
            <Navbar />
            <main className="flex flex-col grow">{children}</main>
          </div>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
