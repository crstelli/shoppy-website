import { supabase } from "./supabase";

import type { OrderItem } from "../(interfaces)/OrderItem";

export async function fetchOrder(total: number, address: string, user: string) {
  const newOrder = {
    status: "received",
    address,
    total,
  };

  const { data: orderData, error: orderError } = await supabase
    .from("orders")
    .insert(newOrder)
    .select();

  if (orderError) throw orderError;
  return orderData;

  // const { data: productData, error: productError } = await supabase.from("order_items").insert();
}

export async function fetchOrderItem(item: OrderItem) {
  const { data, error } = await supabase
    .from("order_items")
    .insert(item)
    .select();

  if (error) throw error;
  return data;
}
