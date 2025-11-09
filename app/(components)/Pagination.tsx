"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { PAGE_SIZE } from "@/app/(lib)/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./Button";

interface Props {
  elementsSize: number;
}

function Pagination({ elementsSize }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);
  const currentPage = Number(params.get("page") || 1);

  function handleNextPage() {
    if (currentPage * PAGE_SIZE < elementsSize) {
      params.set("page", String(currentPage + 1));
      router.replace(`${pathname}?${params.toString()}`);
    }
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      params.set("page", String(currentPage - 1));
      router.replace(`${pathname}?${params.toString()}`);
    }
  }

  return (
    <div className="flex mt-auto pt-10 items-center justify-between">
      {elementsSize === 0 ? (
        <span>No products displayed</span>
      ) : (
        <span className="text-gray-400">
          Showing{" "}
          <strong className="text-gray-300">
            {PAGE_SIZE * (currentPage - 1) + 1}
          </strong>{" "}
          to{" "}
          <strong className="text-gray-300">
            {Math.min(PAGE_SIZE * currentPage, elementsSize)}
          </strong>{" "}
          of {elementsSize} products
        </span>
      )}
      <div className="flex items-center gap-6">
        <Button
          variant="tertiary"
          onClick={handlePrevPage}
          className="flex items-center border border-gray-800 hover:bg-gray-900"
        >
          <ArrowLeft />
          Previous
        </Button>
        <Button
          variant="tertiary"
          onClick={handleNextPage}
          className="flex items-center border border-gray-800 hover:bg-gray-900"
        >
          Next
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export { Pagination };
