import { supabase } from "./supabase";

export async function fetchSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) throw error;
  return data;
}
