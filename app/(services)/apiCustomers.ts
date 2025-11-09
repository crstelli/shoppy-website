import { supabase } from "./supabase";

export async function getCustomer(email: string) {
  const { data } = await supabase
    .from("customers")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

export async function createCustomer(email: string, full_name: string) {
  const { data, error } = await supabase
    .from("customers")
    .insert({ email, full_name })
    .select();

  if (error) throw error;
  return data;
}

export async function updateCustomer(user: string, address: string) {
  const { data, error } = await supabase
    .from("customers")
    .update({ address })
    .eq("uuid", user);

  if (error) throw error;
  return data;
}
