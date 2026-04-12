import { ArrowRight, Coffee, Croissant, MapPin } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { ImagePlaceholder } from '@/components/common/image-placeholder'
import { PageIntro } from '@/components/common/page-intro'
import { homeImages } from '@/data/site-content'
import { cn } from '@/lib/utils'
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

            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <NavLink className={cn(buttonVariants(), 'w-full sm:w-auto')} to="/menu">
                Explore menu
                <ArrowRight className="h-4 w-4" />
              </NavLink>
              <NavLink className={cn(buttonVariants({ variant: 'secondary' }), 'w-full sm:w-auto')} to="/about">
                Our story
              </NavLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-border bg-white/55 p-4 sm:rounded-[1.75rem] sm:p-5">
                <Croissant className="h-5 w-5 text-primary" />
                <p className="mt-4 text-lg font-semibold text-foreground sm:text-xl">Baked daily</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Butter-rich pastries, tartines, and display-case classics.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-border bg-white/55 p-4 sm:rounded-[1.75rem] sm:p-5">
                <Coffee className="h-5 w-5 text-primary" />
                <p className="mt-4 text-lg font-semibold text-foreground sm:text-xl">Cafe service</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Espresso, chocolat chaud, and unhurried table coffee.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-border bg-white/55 p-4 sm:rounded-[1.75rem] sm:p-5">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="mt-4 text-lg font-semibold text-foreground sm:text-xl">White Town setting</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  French-colonial mood shaped for Pondicherry's old quarter.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <ImagePlaceholder
              alt={homeImages.hero.alt}
              caption={homeImages.hero.caption}
              imageClassName="min-h-[18rem] sm:min-h-[24rem]"
              imageSrc={homeImages.hero.imageSrc}
              loading="eager"
              title={homeImages.hero.title}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <ImagePlaceholder
                alt={homeImages.breakfast.alt}
                caption={homeImages.breakfast.caption}
                imageSrc={homeImages.breakfast.imageSrc}
                title={homeImages.breakfast.title}
              />
              <ImagePlaceholder
                alt={homeImages.dining.alt}
                caption={homeImages.dining.caption}
                imageSrc={homeImages.dining.imageSrc}
                title={homeImages.dining.title}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="site-panel">
        <div className="page-shell grid gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="eyebrow text-primary">Signature mood</p>
            <h2 className="mt-4 text-[2.5rem] leading-[0.94] tracking-[-0.04em] text-foreground sm:text-5xl sm:tracking-[-0.05em]">
              Warm cream, burgundy, brass, and old-world restraint.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-border bg-[#7a2234] p-5 text-white sm:rounded-[1.75rem] sm:p-6">
              <p className="eyebrow text-[#f5d7a6]">Ambiance</p>
              <p className="mt-4 text-base leading-7 sm:text-lg sm:leading-8">
                Built to feel like a real institution instead of a template: quiet luxury,
                heritage detail, and room for conversation.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-border bg-white/55 p-5 sm:rounded-[1.75rem] sm:p-6">
              <p className="eyebrow text-accent">Ideal use</p>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
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
