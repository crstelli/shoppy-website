"use client";

import { updateAddress } from "@/app/(lib)/actions";
import { useState } from "react";
import toast from "react-hot-toast";

function Settings() {
  const [address, setAddress] = useState("");

  return (
    <div>
      <form
        className="flex gap-2 items-center"
        onSubmit={(e) => {
          e.preventDefault();
          updateAddress(address);
          setAddress("");

          toast.success("Address updated successfully.");
        }}
      >
        <label>Your Default Address</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="bg-gray-800 focus:outline-none px-2 py-1"
          type="text"
        />
        <button
          type="submit"
          className="bg-emerald-500 cursor-pointer text-gray-800 px-2 py-1 rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export { Settings };
