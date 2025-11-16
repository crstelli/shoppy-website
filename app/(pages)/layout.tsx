import "@/app/(styles)/globals.css";
import { Toaster } from "react-hot-toast";

import { CartProvider } from "../(contexts)/CartContext";
import { CartMessage } from "./shop/(components)/CartMessage";

import { Navbar } from "@/app/(components)/(navbar)/desktop/Navbar";
import { Footer } from "@/app/(components)/Footer";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: "oklch(27.8% 0.033 256.848)",
            color: "oklch(87.2% 0.01 258.338)",
          },
        }}
      />
      <CartProvider>
        <div className="w-[95%] relative max-w-[1100px] min-h-screen flex flex-col py-10 mx-auto grow">
          <Navbar />
          <main className="flex flex-col grow">{children}</main>
          <CartMessage />
        </div>
      </CartProvider>
      <Footer />
    </>
  );
}
