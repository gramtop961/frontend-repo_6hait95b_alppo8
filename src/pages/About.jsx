import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-950 to-black text-emerald-50">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-white">About Studio Urbane Insight</h1>
          <p className="mt-6 text-emerald-100/90 leading-relaxed">
            Studio Urbane Insight (SUI) is committed to shaping India's digital, modern, and urban transformation. We deliver advanced, sustainable, and people-centric solutions for master planning, strategy, design, and smart city development.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="rounded-2xl border border-white/10 p-6 bg-neutral-900/60">
              <h2 className="text-white font-semibold mb-2">Vision</h2>
              <p className="text-emerald-100/90">To be recognised as a global leader in urban planning, shaping cities and regions that are resilient, inclusive, and thriving for generations to come.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 bg-neutral-900/60">
              <h2 className="text-white font-semibold mb-2">Mission</h2>
              <p className="text-emerald-100/90">To create sustainable and vibrant communities through innovative urban planning solutions, fostering economic prosperity, social equity, and environmental stewardship.</p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-white">Our Approach</h2>
            <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {['Technology-driven','Sustainability-focused','People-centric','Expert-led','Future-ready'].map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-neutral-900/50 px-4 py-3">{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
