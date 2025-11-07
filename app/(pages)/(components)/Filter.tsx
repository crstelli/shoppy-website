"use client";

import { useParams, usePathname, useSearchParams } from "next/navigation";
import type { FilterProps } from "./ProductsList";
import { useRouter } from "next/navigation";

function Filter({ filter }: FilterProps) {
  return (
    <div className="text-xl flex gap-2 mt-10 ml-auto">
      <Item filter={filter}>All</Item>
      <Item filter={filter}>Active</Item>
      <Item filter={filter}>Soldout</Item>
    </div>
  );
}

function Item({ children, filter }: { children: string; filter: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <span
      onClick={() => {
        const params = new URLSearchParams(searchParams);
        params.set("status", children.toLowerCase());
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      }}
      className={`cursor-pointer px-4 py-1 rounded-sm ${
        filter === children.toLowerCase()
          ? "bg-emerald-500 text-gray-900"
          : "bg-gray-800"
      }`}
    >
      {children}
    </span>
  );
}

export { Filter };
