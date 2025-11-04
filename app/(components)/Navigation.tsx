import Link from "next/link";

function Navigation() {
  return (
    <ul className="flex gap-6 text-2xl">
      <li>
        <Link href="/shop">Shop</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export { Navigation };
