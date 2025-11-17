import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceAccordion from '../components/ServiceAccordion'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-950 to-black text-emerald-50">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white">What We Do</h1>
          <p className="mt-4 text-emerald-100/90 max-w-2xl">Explore our integrated services across urban planning, GIS, transport, environment, infrastructure, and feasibility studies.</p>

          <div className="mt-10">
            <ServiceAccordion />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
