import { IconTag } from "@tabler/icons-react";

import Tag from "../Tag";
import type { Product } from "@gstore/core";

export interface SpecificationsProps {
  product: Product;
}

export default function Specifications({ product }: SpecificationsProps) {
  return (
    <>
      {product ? (
        <div className="flex flex-1 flex-col gap-1">
          <div className="mb-3 flex">
            <Tag label={product.specifications.emphasis!} Icon={IconTag} outlined />
          </div>
          {product?.specifications &&
            Object.entries(product.specifications).map(
              ([key, value]) =>
                key !== "emphasis" && (
                  <div key={key} className="flex gap-1">
                    <span className="w-1/3 rounded bg-white/5 p-2">{key}</span>
                    <span className="w-2/3 rounded bg-white/5 p-2">{value}</span>
                  </div>
                )
            )}
        </div>
      ) : null}
    </>
  );
}
