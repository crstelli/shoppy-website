import "@/app/(styles)/globals.css";
import { Outfit } from "next/font/google";

import { CartProvider } from "@/app/(contexts)/CartContext";
import { Footer } from "../(components)/Footer";

const outfit = Outfit({
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
      <body className={`max-w-screen flex flex-col ${outfit.className}`}>
        <div className="h-screen relative flex">
          <CartProvider>{children}</CartProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
