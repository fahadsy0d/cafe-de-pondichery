type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow text-primary">{eyebrow}</p>
      <h1 className="mt-3 text-[2.85rem] leading-[0.92] tracking-[-0.04em] text-foreground sm:mt-4 sm:text-6xl sm:tracking-[-0.05em]">
        {title}
      </h1>
      <p className="mt-4 text-[0.98rem] leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  )
}
