import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (maxScroll <= 0) {
        setProgress(0)
        return
      }
      setProgress((window.scrollY / maxScroll) * 100)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[3px] bg-transparent">
      <div className="h-full bg-accent transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
    </div>
  )
}

