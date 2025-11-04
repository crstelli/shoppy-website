import { Navbar } from "@/app/(components)/Navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body className="h-full min-h-full bg-gray-900 text-gray-300">
        <div className="w-[90%] max-w-[1100px] mx-auto flex flex-col">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
