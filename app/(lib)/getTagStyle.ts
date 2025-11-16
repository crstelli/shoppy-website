export function getTagStyle(
  status: string
): React.ComponentProps<"div">["className"] {
  if (status === "active") return "bg-green-400";
  if (status === "sold out") return "bg-red-400";

  if (status === "received") return "bg-gray-400";
  if (status === "completed") return "bg-green-400";
  if (status === "canceled") return "bg-red-400";
}
