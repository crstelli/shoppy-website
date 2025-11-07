import { Title } from "../(components)/Title";

interface LayoutProps {
  children: React.ReactNode;
}

interface NavProps {
  children: string;
  classes?: React.ComponentProps<"div">["className"];
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Title>Account</Title>
      <div className="grid grid-cols-[auto_1fr] grow">
        <ul className="bg-gray-800 flex flex-col rounded-md h-full border border-gray-700">
          <NavItem>Home</NavItem>
          <NavItem>My Orders</NavItem>
          <NavItem>Settings</NavItem>
          <NavItem classes="mt-auto">Sign Out</NavItem>
        </ul>
        <div className="p-6">{children}</div>
      </div>
    </>
  );
}

function NavItem({ children, classes }: NavProps) {
  return (
    <li className={`hover:bg-gray-900 px-6 py-4 cursor-pointer ${classes}`}>
      {children}
    </li>
  );
}
