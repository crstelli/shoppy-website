"use client";

import { PAGE_SIZE } from "@/app/(lib)/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface Props {
  productsSize: number;
}

function Pagination({ productsSize }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);
  const currentPage = Number(params.get("page") || 1);

  function handleNextPage() {
    if (currentPage * PAGE_SIZE < productsSize) {
      params.set("page", String(currentPage + 1));
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      params.set("page", String(currentPage - 1));
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }

  return (
    <div className="flex mt-auto pt-10 items-center justify-between">
      {productsSize === 0 ? (
        <span>No products displayed</span>
      ) : (
        <span>
          Showing {PAGE_SIZE * (currentPage - 1) + 1} to{" "}
          {Math.min(PAGE_SIZE * currentPage, productsSize)} of {productsSize}{" "}
          products
        </span>
      )}
      <div className="flex items-center gap-6">
        <button
          onClick={handlePrevPage}
          className="flex items-center bg-gray-800 px-2 py-1 rounded-md cursor-pointer"
        >
          <ArrowLeft />
          Prev
        </button>
        <button
          onClick={handleNextPage}
          className="flex items-center bg-gray-800 px-2 py-1 rounded-md cursor-pointer"
        >
          Next
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

export { Pagination };
