import { auth } from "@/app/(lib)/auth";
import { getCustomer } from "@/app/(services)/apiCustomers";
import { getOrders } from "@/app/(services)/apiOrders";

async function OrdersList() {
  const email = (await auth()).user.email;
  const userId = (await getCustomer(email)).uuid;

  const orders = await getOrders(userId);

  return (
    <div className="flex flex-col gap-4">
      {orders.map((ord) => (
        <div
          key={ord.id}
          className="grid grid-cols-2 bg-gray-800 px-4 py-2 rounded-md items-center cursor-pointer"
        >
          <p>Created: {new Date(ord.created_at).toLocaleString()}</p>
          <p>Status: {ord.status}</p>
          <p>Total: {ord.total}</p>
          <p>Address: {ord.address}</p>
        </div>
      ))}
    </div>
  );
}

export { OrdersList };
