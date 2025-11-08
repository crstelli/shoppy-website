interface Props {
  children: string;
}

function Title({ children }: Props) {
  return (
    <h1 className="text-center text-3xl font-semibold mt-17 self-center pb-1 px-2 border-b border-emerald-500">
      {children}
    </h1>
  );
}

export { Title };
