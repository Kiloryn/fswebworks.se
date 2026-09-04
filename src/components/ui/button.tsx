import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[background-color,color] duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
  {
    variants: {
      variant: {
        gold: "bg-gold text-gold-fg hover:bg-gold-2",
        ink: "bg-canvas text-fg hover:bg-canvas-2",
        ghost:
          "bg-transparent text-fg hover:bg-fg/6 border border-line",
        outline:
          "bg-transparent text-ink border border-ink/15 hover:border-ink/40",
        paper: "bg-paper text-ink hover:bg-paper-2",
      },
      size: {
        md: "h-11 px-5 rounded-sm text-sm",
        lg: "h-12 px-6 rounded-sm text-sm",
        xl: "h-14 px-7 rounded-sm text-base",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "lg",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
