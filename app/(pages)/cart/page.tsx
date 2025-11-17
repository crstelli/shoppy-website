import { auth } from "@/app/(lib)/auth";

import { getCustomer } from "@/app/(services)/apiCustomers";
import { fetchSettings } from "@/app/(services)/apiSettings";

import { Login } from "@/app/(components)/Login";
import { Title } from "@/app/(components)/Title";

import { Checkout } from "./(components)/Checkout";
import { ProductsList } from "./(components)/ProductsList";

export const metadata = {
  title: "Cart",
};

export default async function page() {
  const deliveryPrice = (await fetchSettings()).delivery_price;
  const session = await auth();
  if (session?.user?.email) {
    const defaultAddress =
      (await getCustomer(session?.user?.email)).address || "";

    return (
      <>
        <Title>Cart</Title>
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_350px] gap-10 grid-rows-3 h-full grow mt-12">
          <ProductsList />
          <Checkout info={{ defaultAddress, deliveryPrice }} />
        </div>
      </>
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
