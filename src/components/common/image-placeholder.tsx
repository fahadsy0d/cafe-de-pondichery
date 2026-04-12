import { cn } from '@/lib/utils'

type ImagePlaceholderProps = {
  title: string
  caption: string
  imageSrc?: string
  alt?: string
  className?: string
  imageClassName?: string
  loading?: 'eager' | 'lazy'
}

export function ImagePlaceholder({
  title,
  caption,
  imageSrc,
  alt,
  className,
  imageClassName,
  loading = 'lazy',
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-[2rem] border border-border bg-[linear-gradient(180deg,rgba(122,34,52,0.08),rgba(255,255,255,0.5))]',
        className,
      )}
    >
      <div
        className={cn(
          'relative aspect-[5/4] overflow-hidden border-b border-border/70 bg-[radial-gradient(circle_at_top,rgba(175,134,64,0.35),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.75),rgba(244,228,210,0.75))]',
          imageClassName,
        )}
      >
        {imageSrc ? (
          <>
            <img
              alt={alt ?? title}
              className="h-full w-full object-cover"
              decoding="async"
              loading={loading}
              src={imageSrc}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,228,210,0.04),rgba(18,10,9,0.08))]" />
          </>
        ) : (
          <div className="absolute inset-x-6 top-6 h-24 rounded-[1.5rem] border border-white/60 bg-[radial-gradient(circle_at_top,rgba(175,134,64,0.35),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.75),rgba(244,228,210,0.75))]" />
        )}
      </div>

      <div className="p-6">
        <p className="eyebrow text-accent">{imageSrc ? 'Cafe de Pondichery' : 'Photo placeholder'}</p>
        <h3 className="mt-3 text-[2rem] leading-none tracking-[-0.04em] text-foreground sm:text-3xl">{title}</h3>
        <p className="mt-4 text-[0.95rem] leading-6 text-muted-foreground sm:text-sm sm:leading-7">{caption}</p>
      </div>
    </div>
  )
}
