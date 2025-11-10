"use client";

import toast from "react-hot-toast";
import { useState } from "react";
import { updateAddress } from "@/app/(lib)/actions";
import { Button } from "@/app/(components)/Button";

interface Props {
  defaultAddress: string;
}

function Settings({ defaultAddress }: Props) {
  const [address, setAddress] = useState(defaultAddress);

  return (
    <div>
      <form
        className="flex max-md:flex-col gap-4 md:items-center max-md:max-w-[300px]"
        onSubmit={(e) => {
          e.preventDefault();
          updateAddress(address);
          toast.success("Address updated successfully.");
        }}
      >
        <label className="text-lg">Default Delivery Address</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="bg-gray-800 rounded-md focus:outline-none px-2 py-1"
          type="text"
        />
        {address !== defaultAddress && address.length > 3 && (
          <Button variant="secondary" type="submit">
            Save
          </Button>
        )}
      </form>
    </div>
  );
}

export { Settings };
