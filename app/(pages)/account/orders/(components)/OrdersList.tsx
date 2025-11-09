import { auth } from "@/app/(lib)/auth";

import { getCustomer } from "@/app/(services)/apiCustomers";
import { getOrders } from "@/app/(services)/apiOrders";

import { OrderItem } from "./OrderItem";

async function OrdersList() {
  const user = (await auth())?.user;
  if (user?.email) {
    const userId = (await getCustomer(user.email)).uuid;
    const orders = await getOrders(userId);

    return (
      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    );
  }

  return <div>No User</div>;
}

export { OrdersList };
