import { Minus, Plus } from "lucide-react";
import { useCart } from "@/app/(contexts)/useCart";

interface CounterProps {
  id: number;
  quantity: number;
}

interface ItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

function Counter({ id, quantity }: CounterProps) {
  const { editQuantity } = useCart();

  return (
    <div className="row-span-3 flex gap-3 items-center justify-center">
      <Item onClick={() => editQuantity(id, 1)}>
        <Plus />
      </Item>
      <span className="text-3xl">{quantity}</span>
      <Item onClick={() => editQuantity(id, -1)}>
        <Minus />
      </Item>
    </div>
  );
}

function Item({ children, onClick }: ItemProps) {
  return (
    <span
      onClick={onClick}
      className="bg-gray-800 p-1 rounded-full cursor-pointer"
    >
      {children}
    </span>
  );
}

export { Counter };
