import { Title } from "@/app/(components)/Title";
import { SideNavbar } from "./(compontens)/SideNavbar";

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  title: "Account",
};

export default function Layout({ children }: Props) {
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
