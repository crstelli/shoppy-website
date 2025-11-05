interface Props {
  children: string;
  classes?: React.ComponentProps<"button">["className"];
}

function Button({ children, classes }: Props) {
  return (
    <button
      className={`bg-emerald-500 hover:bg-emerald-600 cursor-pointer duration-150 self-center uppercase px-4 py-1 rounded-md text-gray-900 font-semibold ${classes}`}
    >
      {children}
    </button>
  );
}

export { Button };
