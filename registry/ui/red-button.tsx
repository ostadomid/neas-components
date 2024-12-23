"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function RedButton({ children, className, ...rest }: Props) {
  return (
    <Button {...rest} className={cn(className, "bg-red-400")}>
      {children}{" "}
    </Button>
  );
}
