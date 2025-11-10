interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="max-w-screen min-h-screen bg-gray-900 text-gray-300 selection:bg-emerald-500 selection:text-gray-900">
        {children}
      </body>
    </html>
  );
}
