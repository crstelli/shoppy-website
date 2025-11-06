import { Minus, Plus } from "lucide-react";

interface ItemProps {
  children: React.ReactNode;
}

function Counter() {
  return (
    <div className="row-span-3 flex gap-3 items-center justify-center">
      <Item>
        <Plus />
      </Item>
      <span className="text-3xl">1</span>
      <Item>
        <Minus />
      </Item>
    </div>
  );
}

function Item({ children }: ItemProps) {
  return (
    <span className="bg-gray-800 p-1 rounded-full cursor-pointer">
      {children}
    </span>
  );
}

export { Counter };
