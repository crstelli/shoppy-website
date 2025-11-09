interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  className?: string;
}

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const base = "duration-150 cursor-pointer px-4 rounded-md";
  const variants = {
    primary:
      "bg-emerald-500 hover:bg-emerald-600 uppercase text-gray-900 font-semibold py-1",
    secondary: "bg-emerald-400 text-gray-800 hover:bg-emerald-500 py-0.5",
    tertiary: "bg-gray-900 hover:bg-gray-950 py-1",

    danger:
      "text-red-500/60 border border-red-500/60 hover:bg-red-500/60 hover:text-gray-900 uppercase font-semibold py-1",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
