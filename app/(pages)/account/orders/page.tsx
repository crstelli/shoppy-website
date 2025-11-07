import { auth } from "@/app/(lib)/auth";

export default async function page() {
  const session = await auth();
  return <div>Orders</div>;
}
