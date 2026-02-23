import '@/i18n/config'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop'
import { WhatsAppButton } from '@/components/WhatsAppButton/WhatsAppButton'
import { Home } from '@/sections/Home/Home'
import { About } from '@/sections/About/About'
import { Technologies } from '@/sections/Technologies/Technologies'
import { Projects } from '@/sections/Projects/Projects'
import { Education } from '@/sections/Education/Education'
import { Contact } from '@/sections/Contact/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Technologies />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  )
}
