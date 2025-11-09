import type { CartProduct } from "@/app/(interfaces)/CartProduct";

interface Props {
  product: CartProduct;
}

function CheckoutItem({ product }: Props) {
  return (
    <div
      key={product.id}
      className="grid bg-gray-900 rounded-md px-3 py-1 items-center gap-4 grid-cols-[1fr_5fr_2fr]"
    >
      <span className="text-emerald-500 justify-self-center font-bold text-lg">
        {product.quantity}
      </span>
      <h3 className="text-lg">{product.name}</h3>
      <span className="text-xl justify-self-end font-light text-gray-400">
        ${(product.price * product.quantity).toLocaleString()}
      </span>
    </div>
  );
}

export { CheckoutItem };
