"use server";

import {
  deleteOrder,
  editOrder,
  fetchDeliveryPrice,
  fetchOrder,
  fetchOrderItem,
} from "../(services)/apiOrders";
import type { OrderItem } from "../(interfaces)/OrderItem";
import { CartProduct } from "../(interfaces)/CartProduct";
import { auth } from "./auth";
import { getCustomer, updateCustomer } from "../(services)/apiCustomers";
import { revalidatePath } from "next/cache";

export async function createOrder(cart: CartProduct[], address: string) {
  const session = await auth();
  if (session?.user?.email) {
    const userId = (await getCustomer(session?.user?.email)).uuid;

    const deliveryCost = await fetchDeliveryPrice();
    const total =
      cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0) +
      deliveryCost;

    const orderData = (await fetchOrder(total, address, userId))[0];
    const products = cart.map((p: CartProduct) => ({
      product_id: p.id,
      order_id: orderData.id,
      price: p.price,
      quantity: p.quantity,
    }));

    products.forEach((p: OrderItem) => fetchOrderItem(p));
  }
}

export async function updateAddress(newAddress: string) {
  const session = await auth();
  if (session?.user?.email) {
    const userId = (await getCustomer(session.user.email)).uuid;

    await updateCustomer(userId, newAddress);
    revalidatePath("/account/settings");
  }
}

export async function cancelOrder(orderId: number) {
  deleteOrder(orderId);
  revalidatePath("/account/orders");
}

export async function updateOrder(
  orderId: number,
  address: string,
  info: string
) {
  await editOrder(orderId, address, info);
  revalidatePath(`/accout/orders/${orderId}`);
}
