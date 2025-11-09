import { Title } from "@/app/(components)/Title";
import { SideNavbar } from "./(compontens)/SideNavbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Title>Account</Title>
      <div className="grid grid-cols-[auto_1fr] grow">
        <SideNavbar />
        <div className="p-6">{children}</div>
      </div>
    </>
  );
}
