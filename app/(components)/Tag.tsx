import React from "react";

interface Props {
  children: string;
  classes?: React.ComponentProps<"div">["className"];
}

function Tag({ children, classes }: Props) {
  return (
    <span
      className={`px-4 py-1 rounded-full uppercase text-white font-semilight ${classes}`}
    >
      {children}
    </span>
  );
}

export { Tag };
