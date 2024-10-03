"use client";

import { useRouter } from "next/navigation";
import { IconCreditCard, IconShoppingCart } from "@tabler/icons-react";

import { useInstallment } from "@/data/hooks";
import { currencyFormatter, type Product } from "@gstore/core";
// import useCarrinho from '@/data/hooks/useCarrinho'

export interface BuyBannerProps {
  product: Product;
}

export default function BuyBanner({ product }: BuyBannerProps) {
  const router = useRouter();
  // const { adicionarItem } = useCarrinho()
  const installment = useInstallment(product.promotionPrice);

  return (
    <div className="flex">
      <div className="flex flex-col border-zinc-500 border-r pr-5">
        <div className="text-zinc-400 line-through">de R$ {product.initialPrice}</div>
        <div className="font-semibold text-2xl">
          <span className="text-base text-zinc-300">por</span>{" "}
          <span className="text-emerald-500">R$ {product.promotionPrice}</span>{" "}
          <span className="text-base text-zinc-300">à vista</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col pl-5 font-semibold text-2xl text-zinc-400">
        <span className="text-base text-zinc-300">{installment.installmentQuantity}x de</span>
        {currencyFormatter(installment.installmentPrice)}{" "}
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="button flex-1 bg-pink-600"
          onClick={() => {}}
          // onClick={() => adicionarItem(produto)}
        >
          <IconShoppingCart size={20} />
          <span>Adicionar</span>
        </button>
        <button
          type="button"
          className="button flex-1 bg-violet-700"
          onClick={() => {
            // adicionarItem(produto)
            router.push("/checkout/pagamento");
          }}
        >
          <IconCreditCard size={20} />
          <span>Comprar</span>
        </button>
      </div>
    </div>
  );
}
