import Link from "next/link";
import { format } from "date-fns";

import type { Order } from "@/app/(interfaces)/Order";
import { getTagStyle } from "@/app/(lib)/getTagStyle";

import { Tag } from "@/app/(components)/Tag";
import { Info } from "./Info";

interface Props {
  order: Order;
}

function OrderItem({ order }: Props) {
  const tagStyle = getTagStyle(order.status);

  return (
    <div
      key={order.id}
      className="grid grid-cols-3 bg-gray-800 text-gray-400 px-4 py-2 gap-y-1 rounded-md items-center"
    >
      <div className="flex items-center col-span-2 gap-4 mb-4">
        <h2 className="font-bold text-xl text-gray-100">Order #{order.id}</h2>
        <Tag classes={`text-sm ${tagStyle}`}>{order.status}</Tag>
      </div>
      <Link
        className="row-span-3 justify-self-center bg-emerald-500 text-lg text-gray-900 px-4 rounded-md"
        href={`/account/orders/${String(order.id)}`}
      >
        Info &rarr;
      </Link>
      <Info heading="Created">
        {format(new Date(order.created_at), "dd/MM/yyyy, HH:mm")}
      </Info>
      <Info heading="Delivery">
        {order.delivery
          ? format(new Date(order.delivery), "dd/MM/yyyy")
          : "Waiting for shipping"}
      </Info>
      <Info heading="Total">{`$${order.total}`}</Info>
      <Info heading="Address">{order.address}</Info>
    </div>
  );
}

export { OrderItem };
