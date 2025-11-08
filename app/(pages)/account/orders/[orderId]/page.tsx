import { Button } from "@/app/(components)/Button";
import { getOrder } from "@/app/(services)/apiOrders";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cancelOrder } from "@/app/(lib)/actions";
import { DeleteButton } from "./(components)/DeleteButton";

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
        className="absolute top-0 left-0 bg-emerald-500 rounded-full text-gray-800 p-2"
      >
        <ArrowLeft />
      </Link>
      <div className="bg-gray-800 px-20 gap-x-4 h-full py-10 rounded-md grid grid-cols-2">
        <h2 className="text-2xl">Order #{orderId}</h2>
        <span>Status: {order.status}</span>
        <p>Total: ${order.total}</p>
        <p>Estimated delivery: {order.delivery || "Unknown"}</p>
        <DeleteButton orderId={order.id} />
        {/* <Button onClick={handleEdit}>Edit</Button> */}
      </div>
    </div>
  );
}
