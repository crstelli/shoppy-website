import { Suspense } from "react";

import type { SearchParams } from "@/app/(interfaces)/SearchParams";
import { getProducts } from "@/app/(services)/apiProducts";

import { Spinner } from "@/app/(components)/Spinner";
import { Title } from "@/app/(components)/Title";

import { Shop } from "./(components)/Shop";

export const metadata = {
  title: "Shop",
};

export default async function page({ searchParams }: SearchParams) {
  const products = (await getProducts()) || [];

  const status = (await searchParams)?.status ?? "all";
  const page = Number((await searchParams)?.page ?? 1);

  return (
    <>
      <Title>Our Products</Title>
      {products?.length > 0 ? (
        <Suspense fallback={<Spinner classes="mx-auto mt-20" />}>
          <Shop products={products} status={status} page={page} />
        </Suspense>
      ) : (
        <h2 className="text-center text-4xl my-auto">
          We are sorry, we have no products now!
        </h2>
      )}
    </>
  );
}
