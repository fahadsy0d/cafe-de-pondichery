import { PageIntro } from '@/components/common/page-intro'
import { menuSections } from '@/data/site-content'

export function MenuPage() {
  return (
    <section className="site-panel">
      <div className="page-shell space-y-10 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <PageIntro
          eyebrow="Menu"
          title="Pastry, coffee, and breakfast with French cafe discipline."
          description="The menu is structured around dependable cafe classics: croissants, coffee, breakfast plates, and a pastry case worth returning for."
        />

        <div className="grid gap-4 xl:grid-cols-2">
          {menuSections.map((section) => (
            <article className="rounded-[1.5rem] border border-border bg-white/55 p-5 sm:rounded-[2rem] sm:p-6" key={section.title}>
              <p className="eyebrow text-primary">{section.title}</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{section.description}</p>

              <div className="mt-6 space-y-4">
                {section.items.map((item) => (
                  <div className="grid gap-3 border-t border-border/80 pt-4 sm:grid-cols-[1fr_auto] sm:items-start" key={item.name}>
                    <div>
                      <h3 className="text-[1.7rem] leading-none tracking-[-0.04em] text-foreground sm:text-2xl">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.detail}</p>
                    </div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.22em]">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
