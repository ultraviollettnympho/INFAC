import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "min-h-11 w-full border border-rule bg-void-2 px-3 py-2 font-sans text-base text-bone placeholder:text-bone-mute",
        "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-phosphor",
        className,
      )}
      {...props}
    />
  );
}
