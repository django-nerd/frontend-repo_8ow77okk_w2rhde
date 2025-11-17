export default function HowItWorks(){
  const steps = [
    {
      title: 'Get your Cutty Box',
      text: 'DIY plant kit with dahlia cutting, soil, pot, fertilizer, and mini greenhouse.',
      img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Grow at your own pace',
      text: 'Easy, guided growth with reminders and simple instructions.',
      img: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Share your journey',
      text: 'Post photos, celebrate milestones, and connect with others.',
      img: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop'
    }
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-semibold text-emerald-900 text-center">How Cutty Works</h1>
      <div className="mt-10 grid gap-8">
        {steps.map((s, i)=> (
          <div key={i} className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl border border-emerald-100 p-6">
            <img src={s.img} alt="step" className="rounded-2xl"/>
            <div>
              <div className="text-emerald-600 font-medium">Step {i+1}</div>
              <h3 className="text-2xl font-semibold text-emerald-900 mt-1">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
