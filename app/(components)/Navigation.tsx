import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface ItemProps {
  children: string;
}

function Navigation() {
  return (
    <ul className="flex gap-6 text-2xl items-center">
      <Item>Shop</Item>
      <Item>About</Item>
      <Item>Contact</Item>
      <Link href="/cart" className="hover:text-gray-400 duration-150">
        <ShoppingCart size={35} className="ml-4" />
      </Link>
    </ul>
  );
}

function Item({ children }: ItemProps) {
  return (
    <li>
      <Link
        className="hover:text-gray-400 duration-150"
        href={`/${children.toLocaleLowerCase()}`}
      >
        {children}
      </Link>
    </li>
  );
}

export { Navigation };
