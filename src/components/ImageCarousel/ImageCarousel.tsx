import { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface ImageCarouselProps {
  images: string[]
  alt: string
  className?: string
}

export function ImageCarousel({ images, alt, className = '' }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const goTo = useCallback((index: number) => {
    setCurrent(() => {
      if (index < 0) return images.length - 1
      if (index >= images.length) return 0
      return index
    })
  }, [images.length])

  const goPrev = () => goTo(current - 1)
  const goNext = () => goTo(current + 1)

  const openLightbox = () => setIsLightboxOpen(true)

  useEffect(() => {
    if (!isLightboxOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isLightboxOpen])

  if (images.length === 0) return null

  const currentSrc = images[current]

  const lightboxContent = isLightboxOpen ? (
    <div
      className="fixed inset-0 z-[100] flex min-h-screen min-w-full items-center justify-center bg-black/95 p-4 sm:p-8"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Vista de imagen completa"
      onClick={() => setIsLightboxOpen(false)}
    >
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false) }}
        className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label="Cerrar"
      >
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className="flex max-h-[85vh] max-w-[90vw] items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentSrc}
          alt={`${alt} ${current + 1}`}
          className="max-h-[85vh] max-w-[90vw] w-auto h-auto object-contain"
          style={{ maxHeight: '85vh', maxWidth: '90vw' }}
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-accent sm:left-4"
            aria-label="Imagen anterior"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white transition hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-accent sm:right-4"
            aria-label="Siguiente imagen"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  ) : null

  return (
    <>
      <div className={`relative overflow-hidden rounded-t-2xl bg-primary-900 ${className}`}>
        <div className="relative aspect-video w-full min-h-[180px] sm:min-h-[220px]">
          <img
            src={currentSrc}
            alt={`${alt} ${current + 1}`}
            className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300"
            onError={(e) => {
              const target = e.currentTarget
              target.onerror = null
              target.src = 'https://placehold.co/800x450/1e293b/94a3b8?text=Image+' + (current + 1)
            }}
          />
        </div>

        <button
          type="button"
          onClick={openLightbox}
          className="absolute right-2 top-2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Ver imagen completa"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Previous image"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-accent md:right-10"
              aria-label="Next image"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? 'w-6 bg-accent' : 'w-2 bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                  aria-current={i === current}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {typeof document !== 'undefined' && lightboxContent && createPortal(lightboxContent, document.body)}
    </>
  )
}
