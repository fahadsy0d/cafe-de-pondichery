import { ImagePlaceholder } from '@/components/common/image-placeholder'
import { PageIntro } from '@/components/common/page-intro'
import { galleryItems } from '@/data/site-content'

export function GalleryPage() {
  return (
    <section className="site-panel">
      <div className="page-shell space-y-10 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <PageIntro
          eyebrow="Gallery"
          title="Interior details, pastry moments, and White Town atmosphere."
          description="Placeholder frames are used here so the site is ready for real photography later without reworking the layout."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <ImagePlaceholder
              caption={item.caption}
              className={index % 3 === 0 ? 'md:col-span-2 xl:col-span-1' : ''}
              key={item.title}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
