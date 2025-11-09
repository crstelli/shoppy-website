interface Props {
  children: React.ReactNode;
  classes?: React.ComponentProps<"div">["className"];
  onClick: () => void;
}

function Operator({ children, classes, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-800 p-1 rounded-full cursor-pointer ${classes}`}
    >
      {children}
    </button>
  );
}

export { Operator };
