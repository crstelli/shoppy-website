"use client";

import { createContext, useState } from "react";

import type { CartProduct } from "@/app/(interfaces)/CartProduct";
import { ShopProduct } from "../(interfaces)/ShopProduct";

interface ContextValue {
  cart: CartProduct[];
  addToCart: (product: ShopProduct) => void;
  isInCart: (product: ShopProduct) => boolean;
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

  function addToCart(product: ShopProduct) {
    const newProduct: CartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image_path: product.image_path,
      max_quantity: product.quantity,
      quantity: 1,
    };

    setCart((cart) => [...cart, newProduct]);
  }

  function isInCart(product: ShopProduct) {
    return cart.some((p) => p.id === product.id);
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
      value={{
        cart,
        addToCart,
        isInCart,
        editQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
