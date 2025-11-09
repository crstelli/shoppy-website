import Link from "next/link";

interface Props {
  children: string;
  link: string;
}

function Item({ children, link }: Props) {
  return (
    <Link className="text-2xl uppercase" href={link}>
      {children}
    </Link>
  );
}

export { Item };
