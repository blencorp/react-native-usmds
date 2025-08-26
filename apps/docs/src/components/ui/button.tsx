import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
  variant: {
  default: `
    bg-[var(--usa-color-primary)]
    text-[var(--usa-color-base-lightest)]
    hover:bg-[color-mix(in srgb, var(--usa-color-primary) 90%, white)]
    focus:ring-4
    focus:ring-[var(--usa-color-focus)]
    focus:ring-offset-4
    focus:ring-offset-[var(--usa-color-base-lightest)]
    border
    border-[var(--usa-color-primary-dark, var(--usa-color-primary))]
    rounded-sm
  `,

  secondary: `
    bg-[var(--usa-color-secondary)]
    text-[var(--usa-color-base-darkest)]
    hover:bg-usa-color-error
    focus:ring-4
    focus:ring-[var(--usa-color-focus)]
    focus:ring-offset-4
    focus:ring-offset-[var(--usa-color-secondary)]
    border
    border-[var(--usa-color-base)]
    rounded-sm
  `,

  destructive: `
    bg-[var(--usa-color-error)]
    text-[var(--usa-color-base-lightest)]
    focus:ring-4
    focus:ring-[var(--usa-color-focus)]
    focus:ring-offset-4
    focus:ring-offset-[var(--usa-color-error)]
    border
    border-[color-mix(in srgb, var(--usa-color-error) 70%, black)]
    rounded-sm
  `,

  outline: `
    bg-transparent
    text-[var(--usa-color-primary)]
    hover:bg-[color-mix(in srgb, var(--usa-color-primary) 5%, black)]
    border
    border-[var(--usa-color-primary)]
    focus:ring-4
    focus:ring-[var(--usa-color-focus)]
    focus:ring-offset-4
    focus:ring-offset-[var(--usa-color-base-lightest)]
    rounded-sm
  `,

  ghost: `
    bg-transparent
    text-[var(--usa-color-primary)]
    hover:bg-[color-mix(in srgb, var(--usa-color-base-lightest) 90%, black)]
    focus:ring-4
    focus:ring-[var(--usa-color-focus)]
    focus:ring-offset-4
    focus:ring-offset-[var(--usa-color-base-lightest)]
    border-none
    rounded-sm
  `,

  link: `
      bg-transparent
  text-[var(--usa-color-primary)]
  hover:text-[color-mix(in srgb, var(--usa-color-primary) 85%, black)]
  hover:underline
  underline-offset-2
  focus:outline-none
  focus-visible:ring-2
  focus-visible:ring-[var(--usa-color-focus)]
  focus-visible:ring-offset-2
  focus-visible:ring-offset-[var(--usa-color-base-lightest)]
  px-0
  py-0
  font-medium
  rounded-none
  border-none
  `,
},
      size: {
        default: "h-10 px-[var(--usa-space-3)] py-[var(--usa-space-2)]",
        sm: "h-8 px-[var(--usa-space-2)] py-[var(--usa-space-1)] text-sm",
        lg: "h-12 px-[var(--usa-space-4)] py-[var(--usa-space-3)] text-lg",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }