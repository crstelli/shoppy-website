import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
