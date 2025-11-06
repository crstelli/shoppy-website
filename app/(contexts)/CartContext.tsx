"use client";

import { createContext, useState } from "react";
import { CartProduct } from "@/app/(interfaces)/CartProduct";

interface ContextValue {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  editQuantity: (id: number, difference: number) => void;
}

interface Props {
  children: React.ReactNode;
}

export const CartContext = createContext<ContextValue | undefined>(undefined);

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<CartProduct[]>([]);

  function addToCart(product: CartProduct) {
    setCart((products) => {
      if (products.some((p) => p.id === product.id)) {
        return products.map((p) => {
          if (p.id === product.id)
            return {
              ...p,
              quantity: p.quantity + 1,
            };

          return p;
        });
      }

      return [
        ...products,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ];
    });
  }

  function removeFromCart(id: number) {
    setCart((products) => products.filter((p) => p.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  function editQuantity(id: number, difference: number) {
    setCart((products) =>
      products.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            quantity: p.quantity + difference,
          };
        }
        return p;
      })
    );
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, editQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
