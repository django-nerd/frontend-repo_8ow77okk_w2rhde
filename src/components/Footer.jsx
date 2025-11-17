export default function Footer(){
  return (
    <footer className="mt-16 border-t border-emerald-100 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3 text-sm text-slate-600">
        <div>
          <div className="font-semibold text-emerald-900">Cutty</div>
          <p className="mt-2">A gentle space to grow plants, community, and everyday happiness.</p>
        </div>
        <div>
          <div className="font-semibold text-emerald-900">Happiness Hub</div>
          <ul className="mt-2 space-y-1">
            <li>Science of nature</li>
            <li>IKEA effect</li>
            <li>Mindful gardening</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-emerald-900">Stay in the loop</div>
          <NewsletterMini />
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-6">© {new Date().getFullYear()} Cutty. Grow Happiness Together.</div>
    </footer>
  )
}

function NewsletterMini(){
  return (
    <form className="mt-2 flex gap-2">
      <input type="email" required placeholder="Email address" className="flex-1 rounded-full border border-emerald-200 bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-300" />
      <button className="px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700">Sign up</button>
    </form>
  )
}
