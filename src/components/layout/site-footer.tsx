import { NavLink } from 'react-router-dom'

import { navigation } from '@/data/site-content'

export function SiteFooter() {
  return (
    <footer className="site-panel">
      <div className="page-shell mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.28em]">
            Cafe de Pondichery
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            A fictional French cafe and bakery concept set in White Town, designed as a polished
            production-ready demo site.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {navigation.map((item) => (
            <NavLink
              className="rounded-full px-3 py-2 text-center text-[0.82rem] text-muted-foreground transition hover:bg-white/55 hover:text-foreground sm:text-sm"
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  )
}
