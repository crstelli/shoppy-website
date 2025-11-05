export function getTagStyle(
  status: string
): React.ComponentProps<"div">["className"] {
  if (status === "active") return "bg-green-400";
  if (status === "sold out") return "bg-red-400";
}
