import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-transform duration-150 ease-out focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-3 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        ghost:
          "bg-transparent text-bone-dim hover:text-phosphor focus-visible:outline-phosphor",
        seal: "bg-transparent text-phosphor hover:text-bone focus-visible:outline-phosphor",
        enter:
          "border border-phosphor bg-transparent px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-phosphor hover:bg-phosphor hover:text-void",
        skip: "border border-rule bg-transparent px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-bone-dim hover:text-bone hover:border-bone-dim",
        provision:
          "border border-bone bg-bone px-5 py-3 font-sans text-sm text-void hover:bg-paper",
        provisionGhost:
          "border border-bone-mute bg-transparent px-5 py-3 font-sans text-sm text-bone hover:border-bone",
        paper:
          "border border-ink bg-transparent px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-ink hover:bg-ink hover:text-paper",
      },
      size: {
        sm: "min-h-11 px-3 text-sm",
        md: "min-h-11 px-4",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "md",
    },
  },
);

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants> & { asChild?: boolean }
>(function Button({ className, variant, size, asChild = false, ...props }, ref) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
});
