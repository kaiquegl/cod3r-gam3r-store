import Link from "next/link";

import { CartIcon, Logo } from "@/icons";
// import useCarrinho from '@/data/hooks/useCarrinho'

export default function Cabecalho() {
  const itemsQuantity = 0;
  // const { qtdeItens } = useCarrinho()

  return (
    <header
      className="flex h-20 flex-col"
      style={{
        background: "linear-gradient(90deg, #14002D 0%, #420093 50%, #14002D 100%)",
      }}
    >
      <div className="container flex flex-1 flex-col justify-center">
        <div className="flex items-center justify-between">
          <Logo />

          <Link href="/checkout/carrinho">
            <CartIcon itemsQuantity={itemsQuantity} />
          </Link>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20" />
    </header>
  );
}
