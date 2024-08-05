import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function Large({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
  );
}
