import Image from "next/image";

function TextLogo() {
  return (
    <h1 className="flex items-center gap-4 text-3xl font-bold text-emerald-500">
      <Image alt="Company logo" src="/logo.svg" width={42} height={42} />
      Shoppy
    </h1>
  );
}

export { TextLogo };
