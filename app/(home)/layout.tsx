import "@/app/(styles)/globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "400", "700"],
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
    <main
      className={`h-screen relative flex selection:bg-emerald-500 selection:text-gray-800 ${outfit.className}`}
    >
      {children}
    </main>
  );
}
