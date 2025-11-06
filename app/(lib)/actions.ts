"use server";

import { fetchOrder, fetchOrderItem } from "../(services)/apiOrders";
import type { OrderItem } from "../(interfaces)/OrderItem";
import { CartProduct } from "../(interfaces)/CartProduct";

export async function createOrder(cart: CartProduct[]) {
  const orderData = (await fetchOrder(200, "test address", "user"))[0];
  const products = cart.map((p: CartProduct) => ({
    product_id: p.id,
    order_id: orderData.id,
    price: p.price,
    quantity: p.quantity,
  }));

  products.forEach((p: OrderItem) => fetchOrderItem(p));
}
