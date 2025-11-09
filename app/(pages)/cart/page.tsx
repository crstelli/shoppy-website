import { auth } from "@/app/(lib)/auth";

import { getCustomer } from "@/app/(services)/apiCustomers";
import { Login } from "@/app/(components)/Login";

import { Checkout } from "./(components)/Checkout";
import { ProductsList } from "./(components)/ProductsList";

export default async function page() {
  const session = await auth();
  if (session?.user?.email) {
    const defaultAddress = (await getCustomer(session?.user?.email)).address;

    return (
      <div className="grid grid-cols-[1fr_300px] gap-10 grid-rows-3 h-full grow mt-10">
        <ProductsList />
        <Checkout defaultAddress={defaultAddress} />
      </div>
    );
  } else {
    return (
      <div className="m-auto px-10 py-4 bg-gray-800 rounded-md flex flex-col items-center gap-8">
        <h1 className="text-3xl">You are not logged in</h1>
        <Login />
      </div>
    );
  }
}
