import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const URL = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_KEY;

if (!URL || !KEY) throw new Error("Invalid URL or KEY");

export const supabase: SupabaseClient = createClient(URL, KEY);
