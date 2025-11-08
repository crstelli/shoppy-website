import { Suspense } from "react";

import { Spinner } from "@/app/(components)/Spinner";

import { ProductsList } from "../(components)/ProductsList";
import { Title } from "../(components)/Title";

import { searchParams } from "@/app/(interfaces)/SearchParams";
import { Pagination } from "./(components)/Pagination";
import { fetchProducts } from "@/app/(services)/apiProducts";
import { PAGE_SIZE } from "@/app/(lib)/constants";

export const metadata = {
  title: "Shop",
};

export default async function page({ searchParams }: searchParams) {
  const filter = (await searchParams)?.status ?? "all";
  const page = Number((await searchParams)?.page ?? 1);

  const products = await fetchProducts();

  const displayedProducts =
    filter === "all"
      ? products
      : products?.filter((prod) => prod.status.replaceAll(" ", "") === filter);

  return (
    <>
      <Title>Our Products</Title>
      <Suspense fallback={<Spinner classes="mx-auto mt-20" />}>
        <ProductsList
          page={page}
          filter={filter}
          products={displayedProducts}
        />
      </Suspense>
      <Pagination productsSize={displayedProducts?.length} />
    </>
  );
}
