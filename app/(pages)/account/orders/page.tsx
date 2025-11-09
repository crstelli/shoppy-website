import { Suspense } from "react";

import { Spinner } from "@/app/(components)/Spinner";
import { OrdersList } from "./(components)/OrdersList";

export default async function page() {
  return (
    <Suspense fallback={<Spinner classes="mt-20 mx-auto" />}>
      <OrdersList />
    </Suspense>
  );
}
