import { Building2, Map, Globe, Leaf, Network, LineChart } from 'lucide-react'

export function Intro() {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-4">About Studio Urbane Insight</h2>
            <p className="text-emerald-100/90 leading-relaxed">
              Studio Urbane Insight (SUI) is committed to shaping India's digital, modern, and urban transformation. We deliver advanced, sustainable, and people-centric solutions for master planning, strategy, design, and smart city development.
            </p>
          </div>
          <div className="md:col-span-1">
            <div className="rounded-2xl border border-white/10 p-6 bg-neutral-900/40">
              <h3 className="text-white font-semibold mb-2">Vision</h3>
              <p className="text-emerald-100/90 text-sm">To be recognised as a global leader in urban planning, shaping cities and regions that are resilient, inclusive, and thriving for generations to come.</p>
              <div className="h-px bg-white/10 my-4" />
              <h3 className="text-white font-semibold mb-2">Mission</h3>
              <p className="text-emerald-100/90 text-sm">To create sustainable and vibrant communities through innovative urban planning solutions, fostering economic prosperity, social equity, and environmental stewardship.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhyChoose() {
  const items = [
    { icon: Globe, title: 'Future-ready', text: 'Global benchmarks with local insight.' },
    { icon: Leaf, title: 'Sustainability-first', text: 'Environmental stewardship at the core.' },
    { icon: Network, title: 'Technology-driven', text: 'GIS, analytics, and data-led planning.' },
    { icon: Building2, title: 'People-centric', text: 'Inclusive design for thriving communities.' },
  ]
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose SUI?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 p-6 bg-neutral-900/50 hover:bg-neutral-900/70 transition-colors">
              <Icon className="h-8 w-8 text-emerald-400" />
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-emerald-100/90">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServicesOverview() {
  const services = [
    { title: 'Urban Planning', icon: Building2, desc: 'Master planning for resilient, inclusive growth.' },
    { title: 'GIS Solutions', icon: Map, desc: 'Data-driven spatial analysis and mapping.' },
    { title: 'Regional Planning', icon: Globe, desc: 'Strategies for integrated regional development.' },
    { title: 'Transportation Planning', icon: Network, desc: 'Sustainable mobility and network design.' },
    { title: 'Environmental Planning', icon: Leaf, desc: 'Conservation, mitigation, ecological balance.' },
    { title: 'Infrastructure Planning', icon: Building2, desc: 'Utilities, transportation, public systems.' },
    { title: 'Feasibility Studies', icon: LineChart, desc: 'Viability, cost-benefit, impact assessment.' },
  ]

  return (
    <section className="py-20 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Scope of Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 p-6 bg-neutral-900/50 hover:border-emerald-500/40 transition-colors">
              <Icon className="h-8 w-8 text-emerald-400" />
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-emerald-100/90 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
