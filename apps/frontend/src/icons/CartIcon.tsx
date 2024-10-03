import { IconShoppingCart } from "@tabler/icons-react";

export interface CartIconProps {
  itemsQuantity?: number;
}

export default function CartIcon({ itemsQuantity = 0 }: CartIconProps) {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-violet-dark">
      <IconShoppingCart size={30} stroke={1.3} />

      <div className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 font-semibold text-white text-xs">
        {itemsQuantity}
      </div>
    </div>
  );
}
