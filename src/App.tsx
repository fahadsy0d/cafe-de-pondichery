import { HashRouter, Route, Routes } from 'react-router-dom'

import { SiteShell } from '@/components/layout/site-shell'
import { AboutPage } from '@/pages/about-page'
import { ContactPage } from '@/pages/contact-page'
import { GalleryPage } from '@/pages/gallery-page'
import { HomePage } from '@/pages/home-page'
import { MenuPage } from '@/pages/menu-page'

function App() {
  return (
    <HashRouter>
      <SiteShell>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<MenuPage />} path="/menu" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<GalleryPage />} path="/gallery" />
          <Route element={<ContactPage />} path="/contact" />
        </Routes>
      </SiteShell>
    </HashRouter>
  )
}

export default App
