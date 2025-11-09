"use client";

import { Button } from "@/app/(components)/Button";
import { updateOrder } from "@/app/(lib)/actions";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  orderId: number;
}

function EditOrder({ orderId }: Props) {
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState("");
  return (
    <form
      className="flex flex-col gap-2 items-center"
      onSubmit={(e) => {
        e.preventDefault();
        updateOrder(orderId, address, info);

        setAddress("");
        setInfo("");

        toast.success("Order updated successfully.");
      }}
    >
      <label>Delivery Address</label>
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="bg-gray-700 focus:outline-none px-2 py-1"
        type="text"
      />
      <label>Add some info</label>
      <input
        value={info}
        onChange={(e) => setInfo(e.target.value)}
        className="bg-gray-700 focus:outline-none px-2 py-1"
        type="text"
      />
      <Button variant="secondary" type="submit">
        Save
      </Button>
    </form>
  );
}

export { EditOrder };
