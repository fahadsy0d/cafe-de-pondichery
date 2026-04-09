import { cn } from '@/lib/utils'

type ImagePlaceholderProps = {
  title: string
  caption: string
  className?: string
}

export function ImagePlaceholder({ title, caption, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[2rem] border border-border bg-[linear-gradient(180deg,rgba(122,34,52,0.08),rgba(255,255,255,0.5))] p-6',
        className,
      )}
    >
      <div className="absolute inset-x-6 top-6 h-24 rounded-[1.5rem] border border-white/60 bg-[radial-gradient(circle_at_top,rgba(175,134,64,0.35),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.75),rgba(244,228,210,0.75))]" />
      <div className="relative mt-28">
        <p className="eyebrow text-accent">Photo placeholder</p>
        <h3 className="mt-3 text-3xl leading-none tracking-[-0.04em] text-foreground">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{caption}</p>
      </div>
    </div>
  )
}
