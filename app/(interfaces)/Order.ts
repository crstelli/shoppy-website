import type { UUID } from "crypto";

export interface Order {
  id: number;
  created_at: Date;
  user_id: UUID;
  status: string;
  address: string;
  delivery: Date | null;
  total: number;
  info: string | null;
}
