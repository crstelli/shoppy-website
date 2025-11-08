import { auth } from "@/app/(lib)/auth";
import { getCustomer } from "@/app/(services)/apiCustomers";
import { getOrders } from "@/app/(services)/apiOrders";
import Link from "next/link";

async function OrdersList() {
  const user = (await auth())?.user;
  if (user?.email) {
    const userId = (await getCustomer(user.email)).uuid;

    const orders = await getOrders(userId);

    return (
      <div className="flex flex-col gap-4">
        {orders.map((ord) => (
          <div
            key={ord.id}
            className="grid grid-cols-3 bg-gray-800 px-4 py-2 rounded-md items-center"
          >
            <p>Created: {new Date(ord.created_at).toLocaleString()}</p>
            <p>Status: {ord.status}</p>
            <Link
              className="row-span-2 justify-self-center bg-emerald-500 text-lg text-gray-900 px-4 rounded-md"
              href={`/account/orders/${String(ord.id)}`}
            >
              Info &rarr;
            </Link>
            <p>Total: {ord.total}</p>
            <p>Address: {ord.address}</p>
          </div>
        ))}
      </div>
    );
  }

  return <div>No User</div>;
}

export { OrdersList };
