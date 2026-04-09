import { ArrowRight, Coffee, Croissant, MapPin } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { ImagePlaceholder } from '@/components/common/image-placeholder'
import { PageIntro } from '@/components/common/page-intro'
import { buttonVariants } from '@/components/ui/button'

export function HomePage() {
  return (
    <div className="space-y-6">
      <section className="site-panel">
        <div className="page-shell grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-12">
          <div className="space-y-8">
            <PageIntro
              eyebrow="White Town, Pondicherry"
              title="French mornings. Pondicherry afternoons."
              description="Cafe de Pondichery is imagined as a heritage French cafe and bakery where croissants, coffee, and slow service meet the old streets of White Town."
            />

            <div className="flex flex-wrap gap-3">
              <NavLink className={buttonVariants()} to="/menu">
                Explore menu
                <ArrowRight className="h-4 w-4" />
              </NavLink>
              <NavLink className={buttonVariants({ variant: 'secondary' })} to="/about">
                Our story
              </NavLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-border bg-white/55 p-5">
                <Croissant className="h-5 w-5 text-primary" />
                <p className="mt-4 text-xl font-semibold text-foreground">Baked daily</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Butter-rich pastries, tartines, and display-case classics.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-border bg-white/55 p-5">
                <Coffee className="h-5 w-5 text-primary" />
                <p className="mt-4 text-xl font-semibold text-foreground">Cafe service</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Espresso, chocolat chaud, and unhurried table coffee.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-border bg-white/55 p-5">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="mt-4 text-xl font-semibold text-foreground">White Town setting</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  French-colonial mood shaped for Pondicherry’s old quarter.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <ImagePlaceholder
              caption="Facade placeholder for a French-colonial streetfront with shutters, pale walls, and warm afternoon light."
              className="min-h-[24rem]"
              title="Cafe facade"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <ImagePlaceholder caption="Breakfast trays, pastries, and porcelain coffee service." title="Morning table" />
              <ImagePlaceholder caption="An intimate interior with cane chairs and burgundy upholstery." title="Dining room" />
            </div>
          </div>
        </div>
      </section>

      <section className="site-panel">
        <div className="page-shell grid gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="eyebrow text-primary">Signature mood</p>
            <h2 className="mt-4 text-4xl leading-none tracking-[-0.05em] text-foreground sm:text-5xl">
              Warm cream, burgundy, brass, and old-world restraint.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-border bg-[#7a2234] p-6 text-white">
              <p className="eyebrow text-[#f5d7a6]">Ambiance</p>
              <p className="mt-4 text-lg leading-8">
                Built to feel like a real institution instead of a template: quiet luxury,
                heritage detail, and room for conversation.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-border bg-white/55 p-6">
              <p className="eyebrow text-accent">Ideal use</p>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Breakfast meet-ups, afternoon coffee, and visitors looking for a memorable White
                Town stop.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
