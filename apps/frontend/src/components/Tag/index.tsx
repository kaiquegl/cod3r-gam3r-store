import { cn } from "@gstore/core";

export interface TagProps {
  label: string;
  outlined?: boolean;
  Icon: React.ElementType;
}

export default function Tag({ outlined, label, Icon }: TagProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 self-start rounded-full px-4 py-1 text-xs uppercase",
        outlined ? "border border-violet-500 text-white" : "bg-gradient-to-r from-violet-600 to-violet-700"
      )}
    >
      <Icon size={15} />
      <span>{label}</span>
    </div>
  );
}
