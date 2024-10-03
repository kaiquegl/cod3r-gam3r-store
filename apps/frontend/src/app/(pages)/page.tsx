import { products } from "@gstore/core";
import { Product } from "@/components";

export default function HomePage() {
  return (
    <div className="container flex flex-1 flex-col gap-5 py-10">
      <Product.List products={products} />
    </div>
  );
}
