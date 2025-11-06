import React from "react";

interface Props {
  children: string;
  classes?: React.ComponentProps<"div">["className"];
}

function Tag({ children, classes }: Props) {
  return (
    <span
      className={`px-4 py-1 rounded-full uppercase text-gray-900 font-bold font-semilight z-1 ${classes}`}
    >
      {children}
    </span>
  );
}

export { Tag };
