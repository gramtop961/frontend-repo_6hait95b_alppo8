export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-white font-semibold">Studio Urbane Insight</p>
            <p className="text-emerald-100/80 text-sm mt-2">A division of STAPL – Shaping Sustainable Futures</p>
          </div>
          <div>
            <p className="text-white font-semibold">Contact</p>
            <p className="text-emerald-100/80 text-sm mt-2">ABC, ABC Road, Sanpada, Navi Mumbai, Maharashtra 400705</p>
            <p className="text-emerald-100/80 text-sm">+91 9999999 / 88888888</p>
            <p className="text-emerald-100/80 text-sm">aaa@gmail.com</p>
          </div>
          <div>
            <p className="text-white font-semibold">Location</p>
            <div className="mt-2 aspect-[16/9] rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Sanpada%2C%20Navi%20Mumbai&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-emerald-100/60">© {new Date().getFullYear()} Studio Urbane Insight. All rights reserved.</div>
      </div>
    </footer>
  )
}
