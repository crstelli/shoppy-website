"use client";

import { Button } from "@/app/(components)/Button";
import { cancelOrder } from "@/app/(lib)/actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function DeleteButton({ orderId }: { orderId: number }) {
  const router = useRouter();
  return (
    <form
      onSubmit={async () => {
        await cancelOrder(orderId);
        router.back();
        router.refresh();
        toast.success("Order deleted successfully");
      }}
    >
      <Button variant="danger" type="submit">
        Delete Order
      </Button>
    </form>
  );
}

export { DeleteButton };
