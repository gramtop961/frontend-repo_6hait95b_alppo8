import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LeadershipGrid from '../components/Leadership'

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-950 to-black text-emerald-50">
      <Navbar />
      <main className="pt-28">
        <LeadershipGrid />
      </main>
      <Footer />
    </div>
  )
}
