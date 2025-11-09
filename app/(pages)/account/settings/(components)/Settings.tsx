"use client";

import toast from "react-hot-toast";
import { useState } from "react";
import { updateAddress } from "@/app/(lib)/actions";

interface Props {
  defaultAddress: string;
}

function Settings({ defaultAddress }: Props) {
  const [address, setAddress] = useState(defaultAddress);

  return (
    <div>
      <form
        className="flex gap-4 items-center"
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
          <button
            type="submit"
            className="bg-emerald-500 cursor-pointer text-gray-800 px-2 py-1 rounded-md"
          >
            Save
          </button>
        )}
      </form>
    </div>
  );
}

export { Settings };
