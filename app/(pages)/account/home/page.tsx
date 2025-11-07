import { auth } from "@/app/(lib)/auth";

export default async function page() {
  const session = await auth();
  return <h2 className="text-2xl">Welcome, {session?.user?.name}</h2>;
}
