import Link from "next/link";
import { format } from "date-fns";

import type { Order } from "@/app/(interfaces)/Order";
import { getTagStyle } from "@/app/(lib)/getTagStyle";

import { Button } from "@/app/(components)/Button";
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
      className="grid grid-cols-[1fr_auto] sm:grid-cols-2 md:grid-cols-[1fr_1fr_auto] bg-gray-800 text-gray-400 px-4 py-2 gap-y-1 rounded-md items-center"
    >
      <div className="flex items-center md:col-span-2 gap-4 mb-4">
        <Tag classes={`text-sm ${tagStyle}`}>{order.status}</Tag>
        <h2 className="font-bold text-xl text-gray-100">Order #{order.id}</h2>
      </div>
      <Link
        className="row-span-5 self-start sm:row-span-1 sm:justify-self-end md:row-span-3"
        href={`/account/orders/${String(order.id)}`}
      >
        <Button>Info &rarr;</Button>
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
