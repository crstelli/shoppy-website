interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body className="bg-red-400">{children}</body>
    </html>
  );
}
