interface Props {
  children: string;
  onClick: () => void;
  classes?: React.ComponentProps<"button">["className"];
}

function Button({ children, classes, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`bg-emerald-500 hover:bg-emerald-600 cursor-pointer duration-150 self-center uppercase px-4 py-1 rounded-md text-gray-900 font-semibold ${classes}`}
    >
      {children}
    </button>
  );
}

export { Button };
