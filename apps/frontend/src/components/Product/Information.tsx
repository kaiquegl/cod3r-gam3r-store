import Image from "next/image";

import type { Product } from "@gstore/core";
import Specifications from "./Specifications";

export interface ProductInformationProps {
  product: Product;
}

export default function ProductInformation({ product }: ProductInformationProps) {
  return (
    <>
      {product ? (
        <div className="flex items-center rounded-xl bg-violet-dark p-5">
          <div className="relative flex h-96 flex-1 justify-center">
            <Image src={product.image!} fill className="object-cover p-7" alt="Imagem do Produto" />
          </div>
          <Specifications product={product} />
        </div>
      ) : null}
    </>
  );
}
