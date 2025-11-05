import Link from "next/link";

interface ItemProps {
  children: string;
}

function Navigation() {
  return (
    <ul className="flex gap-6 text-2xl">
      <Item>Shop</Item>
      <Item>About</Item>
      <Item>Contact</Item>
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
