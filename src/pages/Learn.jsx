export default function Learn(){
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-emerald-900">Happiness Hub</h1>
        <p className="mt-2 text-slate-600">Guides, science, and gentle ideas for everyday wellbeing through nature.</p>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[{
          title:'Science of Happiness',
          text:'From attention restoration to microbiome exposure—nature helps us reset.',
          img:'https://images.unsplash.com/photo-1466695108335-44674aa2058d?q=80&w=1200&auto=format&fit=crop'
        },{
          title:'The IKEA effect',
          text:'We value what we build. Tending plants boosts meaning and joy.',
          img:'https://images.unsplash.com/photo-1511910849309-0f5d4bd10af8?q=80&w=1200&auto=format&fit=crop'
        },{
          title:'Mindful Gardening',
          text:'Simple, sensory practices to slow down and breathe again.',
          img:'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1200&auto=format&fit=crop'
        }].map((c)=> (
          <article key={c.title} className="bg-white rounded-3xl border border-emerald-100 overflow-hidden">
            <img src={c.img} alt="cover" className="h-48 w-full object-cover"/>
            <div className="p-5">
              <h3 className="font-semibold text-emerald-900">{c.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{c.text}</p>
              <button className="mt-3 text-emerald-700">Read more →</button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-100">
          <div className="font-semibold text-emerald-900">Short video guides</div>
          <p className="text-sm text-slate-600 mt-1">Quick, calming how-tos for watering, repotting, and more.</p>
        </div>
        <div className="p-6 rounded-3xl bg-white border border-emerald-100">
          <div className="font-semibold text-emerald-900">Kids & schools track</div>
          <p className="text-sm text-slate-600 mt-1">Simple activities to teach growth, patience, and care.</p>
        </div>
      </div>
    </section>
  )
}
