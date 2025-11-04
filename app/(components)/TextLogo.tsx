import Image from "next/image";

function TextLogo() {
  return (
    <h1 className="flex items-center gap-5 text-4xl font-bold text-emerald-500">
      <Image alt="Company logo" src="logo.svg" width={52} height={52} />
      Shoppy
    </h1>
  );
}

export { TextLogo };
