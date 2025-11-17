import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Intro, WhyChoose, ServicesOverview } from '../components/Sections'
import LeadershipGrid from '../components/Leadership'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-950 to-black text-emerald-50">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Intro />
        <ServicesOverview />
        <WhyChoose />
        <LeadershipGrid />
      </main>
      <Footer />
    </div>
  )
}
