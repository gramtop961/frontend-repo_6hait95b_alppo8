import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              Shaping Sustainable Futures
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-emerald-100/90 max-w-2xl"
            >
              Studio Urbane Insight — Modern Urban Planning, Design & Strategy for Future-Ready Cities.
            </motion.p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/services" className="inline-flex items-center rounded-full bg-emerald-600 text-white px-6 py-3 font-semibold hover:bg-emerald-500 transition-colors">
                Explore Our Services
              </Link>
              <Link to="/contact" className="inline-flex items-center rounded-full border border-emerald-500/40 text-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/40"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-emerald-900/40 via-neutral-900 to-neutral-900" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_35%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm uppercase tracking-widest text-emerald-300/80">Smart Cities • GIS • Infrastructure</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
