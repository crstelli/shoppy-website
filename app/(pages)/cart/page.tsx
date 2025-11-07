import { auth } from "@/app/(lib)/auth";
import { Checkout } from "./(components)/Checkout";
import { ProductsList } from "./(components)/ProductsList";
import { getCustomer } from "@/app/(services)/apiCustomers";

export default async function page() {
  const session = await auth();
  const defaultAddress = (await getCustomer(session?.user?.email)).address;

  return (
    <div className="grid grid-cols-[1fr_300px] gap-10 grid-rows-3 h-full grow mt-10">
      <ProductsList />
      <Checkout defaultAddress={defaultAddress} />
    </div>
  );
}
