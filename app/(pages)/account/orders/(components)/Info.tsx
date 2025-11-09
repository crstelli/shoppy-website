interface Props {
  heading: string;
  children: string;
}

function Info({ heading, children }: Props) {
  return (
    <p>
      <span className="font-bold text-gray-100">{heading}:</span> {children}
    </p>
  );
}

export { Info };
