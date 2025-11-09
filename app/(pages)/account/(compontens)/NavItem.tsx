import Link from "next/link";
import { usePathname } from "next/navigation";

import type { LucideIcon } from "lucide-react";

interface Props {
  children: string;
  Icon: LucideIcon;
}

function NavItem({ children, Icon }: Props) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/account/${children.toLowerCase()}`);

  return (
    <Link href={`/account/${children.toLowerCase()}`}>
      <li
        className={`hover:bg-gray-900 flex items-center gap-3 px-4 md:px-10 py-4 cursor-pointer ${
          isActive ? "bg-gray-900" : "text-gray-500"
        }`}
      >
        <Icon />
        <span className="max-md:hidden">{children}</span>
      </li>
    </Link>
  );
}

export { NavItem };
