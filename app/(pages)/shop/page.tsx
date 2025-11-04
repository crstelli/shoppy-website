import { Suspense } from "react";

import { Spinner } from "@/app/(components)/Spinner";

import { ProductsList } from "../(components)/ProductsList";
import { Title } from "../(components)/Title";

export const metadata = {
  title: "Shop",
};

export default async function page() {
  return (
    <>
      <Title>Our Products</Title>
      <Suspense fallback={<Spinner classes="mx-auto mt-20" />}>
        <ProductsList />
      </Suspense>
    </>
  );
}
