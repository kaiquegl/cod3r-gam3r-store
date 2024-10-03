import { Product } from "@/components";
import { products } from "@gstore/core";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params: { id } }: ProductPageProps) {
  const product = products.find((product) => product.id === Number(id));

  return (
    <>
      {product ? (
        <div className="container flex flex-col gap-20 py-10">
          <div className="flex flex-col gap-10">
            <Product.Title product={product} />
            <Product.Information product={product} />
            <Product.BuyBanner product={product} />
          </div>
        </div>
      ) : (
        <Product.NotFound />
      )}
    </>
  );
}
