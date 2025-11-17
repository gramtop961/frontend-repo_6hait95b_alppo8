import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="py-20 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
            <p className="mt-3 text-emerald-100/90">We’d love to hear about your project and explore how we can collaborate.</p>

            <div className="mt-8 space-y-3 text-emerald-100/90">
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-emerald-400" /> ABC, ABC Road, Sanpada, Navi Mumbai, Maharashtra 400705</p>
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-emerald-400" /> +91 9999999 / 88888888</p>
              <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-emerald-400" /> aaa@gmail.com</p>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="text-emerald-200 hover:text-white" aria-label="LinkedIn"><Linkedin /></a>
              </div>
            </div>

            <div className="mt-8 aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
              <iframe title="map" src="https://www.google.com/maps?q=Sanpada%2C%20Navi%20Mumbai&output=embed" className="w-full h-full" loading="lazy" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6">
            {sent ? (
              <div className="text-center py-10">
                <p className="text-white text-lg font-semibold">Thank you! We’ll get back to you shortly.</p>
                <p className="text-emerald-100/80 text-sm mt-2">Your message has been received.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-emerald-200/90 mb-1">Name</label>
                    <input required className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-emerald-200/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm text-emerald-200/90 mb-1">Email</label>
                    <input type="email" required className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-emerald-200/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm text-emerald-200/90 mb-1">Subject</label>
                  <input required className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-emerald-200/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" placeholder="Project brief" />
                </div>
                <div className="mt-4">
                  <label className="block text-sm text-emerald-200/90 mb-1">Message</label>
                  <textarea rows="5" required className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-emerald-200/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" placeholder="Tell us about your needs"></textarea>
                </div>
                <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 font-semibold transition-colors">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
