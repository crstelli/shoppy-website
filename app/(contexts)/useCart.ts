"use client";

import { useContext } from "react";
import { CartContext } from "./CartContext";

function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("You cannot use Cart Context outside a provider.");

  return context;
}

export { useCart };
