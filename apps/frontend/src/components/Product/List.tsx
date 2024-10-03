import ProductItem from "./Item";
import type { Product } from "@gstore/core";
import ProductNotFound from "./NotFound";

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  return (
    <>
      {products.length ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <ProductNotFound withoutBackButton />
      )}
    </>
  );
}
