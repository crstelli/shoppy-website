"use server";

import {
  fetchDeliveryPrice,
  fetchOrder,
  fetchOrderItem,
} from "../(services)/apiOrders";
import type { OrderItem } from "../(interfaces)/OrderItem";
import { CartProduct } from "../(interfaces)/CartProduct";

export async function createOrder(cart: CartProduct[], address: string) {
  const deliveryCost = await fetchDeliveryPrice();
  const total =
    cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0) +
    deliveryCost;

  const orderData = (await fetchOrder(total, address, "user"))[0];
  const products = cart.map((p: CartProduct) => ({
    product_id: p.id,
    order_id: orderData.id,
    price: p.price,
    quantity: p.quantity,
  }));

  products.forEach((p: OrderItem) => fetchOrderItem(p));
}
