import { motion } from 'framer-motion'

function Dot({ delay = 0, x = 0, y = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: [0.1, 0.35, 0.1], scale: [0.6, 1, 0.6] }}
      transition={{ duration: 6, repeat: Infinity, delay }}
      className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400/40"
      style={{ left: x, top: y }}
    />
  )
}

export default function AnimatedBackground() {
  const dots = Array.from({ length: 40 }).map((_, i) => ({
    delay: Math.random() * 6,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
  }))

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      {dots.map((d, i) => (
        <Dot key={i} delay={d.delay} x={d.x} y={d.y} />
      ))}
      {/* gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-transparent to-emerald-900/20" />
    </div>
  )
}
