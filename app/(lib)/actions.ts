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
import { DEV_MODE, DEV_MODE_MESSAGE } from "./constants";

export async function createOrder(cart: CartProduct[], address: string) {
  if (DEV_MODE) {
    return {
      ok: false,
      message: DEV_MODE_MESSAGE,
    };
  } else {
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

    return {
      ok: true,
      message: "ok",
    };
  }
}

export async function updateAddress(newAddress: string) {
  if (DEV_MODE) {
    return { ok: false, message: DEV_MODE_MESSAGE };
  } else {
    const session = await auth();
    if (session?.user?.email) {
      const userId = (await getCustomer(session.user.email)).uuid;

      await updateCustomer(userId, newAddress);
      revalidatePath("/account/settings");
    }
    return { ok: true, message: "ok" };
  }
}

export async function cancelOrder(orderId: number) {
  if (DEV_MODE) {
    return { ok: false, message: DEV_MODE_MESSAGE };
  } else {
    deleteOrder(orderId);
    revalidatePath("/account/orders");
    return { ok: true, message: "ok" };
  }
}

export async function updateOrder(
  orderId: number,
  address: string,
  info: string
) {
  if (DEV_MODE) {
    return { ok: false, message: DEV_MODE_MESSAGE };
  } else {
    await editOrder(orderId, address, info);
    revalidatePath(`/accout/orders/${orderId}`);

    return { ok: true, message: "ok" };
  }
}
