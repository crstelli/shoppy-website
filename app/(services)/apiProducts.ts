import { supabase } from "./supabase";
import type { Product } from "@/app/(interfaces)/Product";

export async function fetchProducts(): Promise<Product[] | null> {
  const { data, error } = await supabase.from("products").select("*");

  if (error) throw error;
  return data;
}
