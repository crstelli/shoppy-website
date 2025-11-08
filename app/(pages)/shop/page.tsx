import { Suspense } from "react";

import { Spinner } from "@/app/(components)/Spinner";

import { ProductsList } from "../(components)/ProductsList";
import { Title } from "../(components)/Title";

import { searchParams } from "@/app/(interfaces)/SearchParams";
import { Pagination } from "./(components)/Pagination";
import { fetchProducts } from "@/app/(services)/apiProducts";

export const metadata = {
  title: "Shop",
};

export default async function page({ searchParams }: searchParams) {
  const filterStatus = (await searchParams)?.status ?? "all";
  const paginationFilter = Number((await searchParams)?.page ?? 1);

  const products = await fetchProducts();

  return (
    <>
      <Title>Our Products</Title>
      <Suspense fallback={<Spinner classes="mx-auto mt-20" />}>
        <ProductsList filter={filterStatus} page={paginationFilter} />
      </Suspense>
      <Pagination productsSize={products?.length} />
    </>
  );
}
