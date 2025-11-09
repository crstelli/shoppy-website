import { auth } from "@/app/(lib)/auth";
import { Settings } from "./(components)/Settings";
import { getCustomer } from "@/app/(services)/apiCustomers";

export default async function page() {
  const email = (await auth())?.user?.email;
  if (email) {
    const defaultAddress = (await getCustomer(email)).address || "";

    return <Settings defaultAddress={defaultAddress} />;
  }
}
