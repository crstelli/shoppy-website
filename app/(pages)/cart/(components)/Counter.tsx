import { Minus, Plus } from "lucide-react";
import { useCart } from "@/app/(contexts)/useCart";

interface CounterProps {
  id: number;
  quantity: number;
  max: number;
}

interface ItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

function Counter({ id, quantity, max }: CounterProps) {
  const { editQuantity } = useCart();

  return (
    <div className="row-span-2 flex gap-4 items-center justify-center">
      <Item onClick={() => quantity > 1 && editQuantity(id, -1)}>
        <Minus size={20} />
      </Item>
      <span className="text-3xl">{quantity}</span>
      <Item onClick={() => quantity < max && editQuantity(id, 1)}>
        <Plus size={20} />
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
