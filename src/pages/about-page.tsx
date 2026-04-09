import { PageIntro } from '@/components/common/page-intro'
import { storyMoments } from '@/data/site-content'

export function AboutPage() {
  return (
    <div className="space-y-6">
      <section className="site-panel">
        <div className="page-shell grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-12">
          <PageIntro
            eyebrow="About"
            title="A cafe imagined from Pondicherry’s French-Tamil memory."
            description="The concept behind Cafe de Pondichery is simple: take the calm, elegant cues of a French bakery and place them in a White Town address that feels tied to the city rather than imported into it."
          />
          <div className="rounded-[2rem] border border-border bg-white/55 p-6">
            <p className="text-lg leading-8 text-foreground">
              The space is designed around ritual: opening shutters in the morning, setting the
              pastry counter, polishing cups, and serving breakfast with the kind of quiet rhythm
              that makes regulars comfortable.
            </p>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              French-colonial details are present, but softened by Pondicherry’s light, weather,
              and local pace. The result is a place that feels established instead of staged.
            </p>
          </div>
        </div>
      </section>

      <section className="site-panel">
        <div className="page-shell grid gap-4 px-5 py-8 sm:px-8 lg:grid-cols-3 lg:px-10">
          {storyMoments.map((moment) => (
            <article className="rounded-[2rem] border border-border bg-white/55 p-6" key={moment.title}>
              <h2 className="text-3xl leading-none tracking-[-0.04em] text-foreground">{moment.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{moment.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
