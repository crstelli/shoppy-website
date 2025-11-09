interface Props {
  header: string;
  children: React.ReactNode;
}

interface SpanProps {
  children: string;
}

function InfoHeading({ header, children }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold uppercase">{header}</h3>
      {children}
    </div>
  );
}

function Span({ children }: SpanProps) {
  return <span className="text-gray-400 text-xl">{children}</span>;
}

InfoHeading.Span = Span;

export { InfoHeading };
