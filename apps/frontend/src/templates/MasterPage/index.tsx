import { cn } from "@gstore/core";
import Header from "./Header";
import Footer from "./Footer";

export interface MasterPageProps {
  className?: string;
  withoutHeader?: boolean;
  withoutFooter?: boolean;
  children: React.ReactNode;
}

export default function MasterPage({
  children,
  className,
  withoutHeader = false,
  withoutFooter = false,
}: MasterPageProps) {
  return (
    <div
      className="flex min-h-dvh flex-col"
      style={{ background: "radial-gradient(50% 50% at 50% 50%, #2d0064 0%, #0d001c 100%)" }}
    >
      <div className="flex w-dvw flex-1 flex-col bg-[url('/background.png')] bg-center bg-contain">
        {!withoutHeader && <Header />}
        <main className={cn(`flex flex-1 flex-col ${className}`)}>{children}</main>
        {!withoutFooter && <Footer />}
      </div>
    </div>
  );
}
