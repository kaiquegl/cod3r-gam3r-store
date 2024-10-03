"use client";

import Link from "next/link";
import Image from "next/image";
import { IconShoppingCartPlus } from "@tabler/icons-react";

import { ScoreReview } from "@/components";
import { currencyFormatter, type Product } from "@gstore/core";

export type ProductItemProps = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="relative flex flex-col rounded-md border border-white/10 bg-violet-dark"
    >
      <div className="absolute top-2.5 right-2.5 flex justify-end">
        <ScoreReview score={product.score} />
      </div>
      <div className="relative h-48 w-full">
        <Image src={product.image} fill className="object-contain" alt={product.name} />
      </div>

      <div className="flex flex-1 flex-col gap-3 border-white/10 border-t p-5">
        <span className="line-clamp-2 h-14 font-semibold text-lg">{product.name}</span>
        <div className="self-start border-b border-dashed text-sm">{product.specifications.emphasis}</div>
        <div className="flex flex-col">
          <span className="text-gray-400 text-sm line-through">de {currencyFormatter(product.initialPrice)}</span>
          <span className="font-semibold text-emerald-400 text-xl">
            por {currencyFormatter(product.promotionPrice)}
          </span>
          {/* <span className="text-zinc-400 text-xs">
                        até {parcelamento.qtdeParcelas}x de{' '}
                        {Moeda.formatar(parcelamento.valorParcela)}
                    </span> */}
        </div>
        <button
          type="button"
          className="flex h-8 items-center justify-center gap-2 justify-self-end rounded-full border-emerald-500 bg-violet-700 hover:border-2 "
          onClick={(e) => {
            e.preventDefault();
            console.log("Adicionar ao carrinho");
            // adicionarItem(props.product)
          }}
        >
          <IconShoppingCartPlus size={20} />
          <span>Adicionar</span>
        </button>
      </div>
    </Link>
  );
}
