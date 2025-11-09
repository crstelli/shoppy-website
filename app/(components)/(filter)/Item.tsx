import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface Props {
  children: string;
  filter: string;
  value: string;
}

function Item({ children, filter, value }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function updateFilter() {
    const params = new URLSearchParams(searchParams);
    params.set(value, children.toLowerCase());
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <span
      onClick={updateFilter}
      className={`border px-4 py-1 rounded-sm ${
        filter === children.toLowerCase()
          ? "bg-emerald-500 text-gray-900 border-emerald-500 cursor-not-allowed"
          : "bg-gray-800 border-gray-800 hover:bg-gray-900 cursor-pointer"
      }`}
    >
      {children}
    </span>
  );
}

export { Item };
