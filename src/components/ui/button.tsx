import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-4 py-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 sm:px-5 sm:text-xs sm:tracking-[0.24em]',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow-[0_16px_40px_rgba(64,33,24,0.12)] hover:-translate-y-0.5 hover:opacity-95',
        secondary:
          'border-border bg-secondary text-secondary-foreground hover:-translate-y-0.5 hover:border-primary/25 hover:bg-white/80',
        ghost:
          'border-border bg-transparent text-foreground hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white/40',
      },
      size: {
        default: 'h-11 px-4 sm:h-12 sm:px-5',
        lg: 'h-12 px-5 text-xs sm:h-14 sm:px-6 sm:text-sm',
        sm: 'h-9 px-3 text-[0.64rem] sm:h-10 sm:px-4 sm:text-[0.68rem]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  ),
)

Button.displayName = 'Button'

export { Button, buttonVariants }
