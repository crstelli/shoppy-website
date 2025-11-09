import { useCart } from "@/app/(contexts)/useCart";
import { Operator } from "./Operator";

import { Minus, Plus } from "lucide-react";

interface Props {
  id: number;
  quantity: number;
  max: number;
}

function Counter({ id, quantity, max }: Props) {
  const { editQuantity } = useCart();

  return (
    <div className="justify-self-center lg:-col-start-1 lg:row-start-1 grid grid-cols-3 justify-items-center gap-4 items-center justify-center">
      {quantity > 1 ? (
        <Operator
          classes="justify-self-end"
          onClick={() => quantity > 1 && editQuantity(id, -1)}
        >
          <Minus size={20} />
        </Operator>
      ) : (
        <div></div>
      )}
      <span className="text-xl justify-self-center">{quantity}</span>
      {quantity < max ? (
        <Operator
          classes="justify-self-start"
          onClick={() => quantity < max && editQuantity(id, 1)}
        >
          <Plus size={20} />
        </Operator>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export { Counter };
