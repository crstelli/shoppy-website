import Link from "next/link";

import { getOrder } from "@/app/(services)/apiOrders";
import { Tag } from "@/app/(components)/Tag";

import { DeleteButton } from "./(components)/DeleteButton";
import { EditOrder } from "./(components)/EditOrder";
import { InfoHeading } from "./(components)/InfoHeading";

import { ArrowLeft } from "lucide-react";
import { getTagStyle } from "@/app/(lib)/getTagStyle";

interface Props {
  params: Promise<{ orderId: string }>;
}

export default async function page({ params }: Props) {
  const orderId = +(await params).orderId;
  const order = await getOrder(orderId);

  return (
    <div className="relative h-full">
      <Link
        href={"/account/orders"}
        className="absolute top-2 left-2 bg-emerald-500 hover:bg-emerald-600 duration-150 rounded-full text-gray-800 p-2"
      >
        <ArrowLeft />
      </Link>
      <div className="bg-gray-800 px-20 gap-6 h-full center py-10 rounded-md grid grid-cols-2">
        <h2 className="text-3xl flex items-center justify-center bg-gray-900 shadow-2xl text-center h-full font-bold">
          Order #{orderId}
        </h2>
        <InfoHeading header="Status">
          <Tag classes={`${getTagStyle(order.status)} self-start`}>
            {order.status}
          </Tag>
        </InfoHeading>
        <InfoHeading header="Total">
          <InfoHeading.Span>{`$ ${order.total.toLocaleString()}`}</InfoHeading.Span>
        </InfoHeading>
        <InfoHeading header="Estimated Delivery">
          <InfoHeading.Span>{order.delivery || "Unknown"}</InfoHeading.Span>
        </InfoHeading>
        <InfoHeading header="Additional Info">
          <InfoHeading.Span>
            {order.info || "No information provvided"}
          </InfoHeading.Span>
        </InfoHeading>
        <InfoHeading header="Address">
          <InfoHeading.Span>{order.address}</InfoHeading.Span>
        </InfoHeading>
        <InfoHeading header="Delete Order">
          <DeleteButton orderId={order.id} />
        </InfoHeading>
        <InfoHeading header="Edit Order">
          <EditOrder orderId={order.id} />
        </InfoHeading>
      </div>
    </div>
  );
}
