import { MasterPage } from "@/templates";

type PagesLayoutProps = {
  children: React.ReactNode;
};

export default function PagesLayout({ children }: PagesLayoutProps) {
  return <MasterPage>{children}</MasterPage>;
}
