import { auth } from "@/app/(lib)/auth";

import { Title } from "@/app/(components)/Title";
import { SideNavbar } from "./(compontens)/SideNavbar";
import { Login } from "@/app/(components)/Login";

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  title: "Account",
};

export default async function Layout({ children }: Props) {
  const user = (await auth())?.user;

  if (user) {
    return (
      <>
        <Title>Account</Title>
        <div className="grid grid-cols-[auto_1fr] grow mt-10">
          <SideNavbar />
          <div className="p-6">{children}</div>
        </div>
      </>
    );
  }

  return (
    <div className="m-auto px-10 py-4 bg-gray-800 rounded-md flex flex-col items-center gap-8">
      <h1 className="text-3xl">You are not logged in</h1>
      <Login />
    </div>
  );
}
