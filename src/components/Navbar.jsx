import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navClasses = ({ isActive }) =>
    `px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-emerald-600 text-white' : 'text-emerald-100 hover:bg-emerald-600/20'}`

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-neutral-900/50 border border-white/10 rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold">SUI</div>
            <div>
              <p className="text-white font-semibold leading-tight">Studio Urbane Insight</p>
              <p className="text-xs text-emerald-200/80">A division of STAPL</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/about" className={navClasses}>About</NavLink>
            <NavLink to="/services" className={navClasses}>Services</NavLink>
            <NavLink to="/leadership" className={navClasses}>Leadership</NavLink>
            <NavLink to="/contact" className={navClasses}>Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919999999" className="flex items-center gap-2 text-emerald-100 hover:text-white">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91 9999999</span>
            </a>
            <a href="mailto:aaa@gmail.com" className="flex items-center gap-2 text-emerald-100 hover:text-white">
              <Mail className="h-4 w-4" />
              <span className="text-sm">aaa@gmail.com</span>
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>

        {open && (
          <div className="mt-2 md:hidden backdrop-blur-xl bg-neutral-900/60 border border-white/10 rounded-2xl p-2">
            <nav className="flex flex-col">
              <NavLink onClick={() => setOpen(false)} to="/about" className={navClasses}>About</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/services" className={navClasses}>Services</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/leadership" className={navClasses}>Leadership</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact" className={navClasses}>Contact</NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
