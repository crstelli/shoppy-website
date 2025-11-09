import { supabase } from "./supabase";
import type { ShopProduct } from "@/app/(interfaces)/ShopProduct";

export async function getProducts(): Promise<ShopProduct[] | null> {
  const { data, error } = await supabase.from("products").select("*");

  if (error) throw error;
  return data;
}
