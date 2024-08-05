import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function Lead({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>
  );
}
