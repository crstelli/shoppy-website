import Link from "next/link";
import type { Order } from "@/app/(interfaces)/Order";

interface Props {
  order: Order;
}

function OrderItem({ order }: Props) {
  return (
    <div
      key={order.id}
      className="grid grid-cols-3 bg-gray-800 px-4 py-2 rounded-md items-center"
    >
      <p>Created: {new Date(order.created_at).toLocaleString()}</p>
      <p>Status: {order.status}</p>
      <Link
        className="row-span-2 justify-self-center bg-emerald-500 text-lg text-gray-900 px-4 rounded-md"
        href={`/account/orders/${String(order.id)}`}
      >
        Info &rarr;
      </Link>
      <p>Total: {order.total}</p>
      <p>Address: {order.address}</p>
    </div>
  );
}

export { OrderItem };
