import { motion } from 'framer-motion'

const leaders = [
  {
    name: 'Mr. ABC',
    title: 'Principal Architect & Director, STAPL',
    exp: '24+ years experience • Founded STAPL in 1999',
    expertise: 'Luxury residences, affordable housing, landmark commercial buildings',
    regions: 'Projects across multiple Indian regions',
    img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Mr. XYZ',
    title: 'Urban Planner & Director',
    exp: 'Expert in government advisory and sustainability',
    expertise: 'MSRDC SPA, Jal Jeevan Mission, UDAN, Swadesh Darshan 2.0',
    regions: 'Worked on major national projects',
    img: 'https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=800&auto=format&fit=crop',
  },
]

export default function LeadershipGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-white font-semibold text-lg">{p.name}</p>
                <p className="text-emerald-200/90 text-sm mt-1">{p.title}</p>
                <p className="text-emerald-100/90 text-sm mt-3">{p.exp}</p>
                <p className="text-emerald-100/90 text-sm">{p.expertise}</p>
                <p className="text-emerald-100/90 text-sm">{p.regions}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
