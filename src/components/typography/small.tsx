import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function Small({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </small>
  );
}
