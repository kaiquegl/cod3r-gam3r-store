import Link from "next/link";
import { IconDevicesPcOff } from "@tabler/icons-react";

export interface ProductNotFoundProps {
  withoutBackButton?: boolean;
}

export default function ProductNotFound({ withoutBackButton }: ProductNotFoundProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-violet-300">
      <IconDevicesPcOff size={180} stroke={0.5} />
      <span className="font-light text-lg text-violet-300">Produto não encontrado</span>
      {!withoutBackButton && (
        <Link href="/" className="button mt-5 bg-violet-700 text-white">
          Voltar
        </Link>
      )}
    </div>
  );
}
