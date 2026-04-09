import { MapPin, Phone, Clock3 } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { PageIntro } from '@/components/common/page-intro'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { contactDetails, openingHours } from '@/data/site-content'

export function ContactPage() {
  return (
    <div className="space-y-6">
      <section className="site-panel">
        <div className="page-shell grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-12">
          <PageIntro
            eyebrow="Contact"
            title="Visit the cafe in White Town."
            description="Address, service hours, and a placeholder map block are included so the demo already reads like a usable local business website."
          />

          <div className="rounded-[2rem] border border-border bg-white/55 p-6">
            <div className="grid gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">{contactDetails.address}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{contactDetails.note}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">{contactDetails.phone}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{contactDetails.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-1 h-5 w-5 text-primary" />
                <div className="w-full space-y-2">
                  {openingHours.map((slot) => (
                    <div className="flex items-center justify-between gap-4 text-sm" key={slot.day}>
                      <span className="text-muted-foreground">{slot.day}</span>
                      <span className="font-medium text-foreground">{slot.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-panel">
        <div className="page-shell grid gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="rounded-[2rem] border border-dashed border-primary/30 bg-[linear-gradient(180deg,rgba(175,134,64,0.08),rgba(255,255,255,0.35))] p-6">
            <p className="eyebrow text-primary">Map block</p>
            <h2 className="mt-4 text-4xl leading-none tracking-[-0.04em] text-foreground">
              Google Maps embed placeholder
            </h2>
            <div className="mt-6 h-[22rem] rounded-[1.5rem] border border-border bg-[radial-gradient(circle_at_top,rgba(122,34,52,0.1),transparent_56%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(240,225,207,0.8))]" />
          </div>

          <form className="rounded-[2rem] border border-border bg-white/55 p-6">
            <p className="eyebrow text-primary">Enquiries</p>
            <h2 className="mt-4 text-4xl leading-none tracking-[-0.04em] text-foreground">
              Reserve a table or ask about the menu.
            </h2>
            <div className="mt-6 grid gap-4">
              <Input placeholder="Your name" />
              <Input placeholder="Email address" type="email" />
              <Textarea placeholder="Reservation or enquiry details" />
              <Button type="button">Send enquiry</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
