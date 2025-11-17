function Footer() {
  return (
    <footer className="flex max-sm:flex-col bg-gray-800 text-gray-500 text-lg justify-center items-center py-8">
      <span>
        Made with ❤ by
        <a
          target="blank"
          href="https://github.com/crstelli"
          className="ml-1 underline"
        >
          crstelli
        </a>
      </span>
      <span className="max-sm:hidden px-2">-</span>
      <span>&copy; 2025 All rights reserved</span>
    </footer>
  );
}

export { Footer };
