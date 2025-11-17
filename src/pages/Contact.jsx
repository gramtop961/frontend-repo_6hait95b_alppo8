import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-950 to-black text-emerald-50">
      <Navbar />
      <main className="pt-28">
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
