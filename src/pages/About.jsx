export default function About(){
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-semibold text-emerald-900 text-center">About Cutty</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
        <div className="bg-white rounded-3xl border border-emerald-100 p-6">
          <h3 className="text-xl font-semibold text-emerald-900">Our mission</h3>
          <p className="mt-2 text-slate-600">Increasing happiness and connection through gentle plant care and kind community.</p>
          <ul className="mt-4 text-slate-700 space-y-2">
            <li>• Inclusive, non-toxic atmosphere</li>
            <li>• Science-informed wellbeing</li>
            <li>• Real-world growth, not doomscrolling</li>
          </ul>
        </div>
        <div className="bg-emerald-50 rounded-3xl border border-emerald-100 p-6">
          <h3 className="text-xl font-semibold text-emerald-900">Why gardening?</h3>
          <p className="mt-2 text-slate-600">Caring for living things builds patience, meaning, and calm. Plants give us something to nurture—and they reward attention with growth.</p>
        </div>
      </div>
    </section>
  )
}
