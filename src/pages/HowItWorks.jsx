export default function HowItWorks(){
  const CUTTY_BOX_IMG = 'https://cdn.discordapp.com/attachments/692077531272052768/1440123736064917534/image0.jpg?ex=691d033e&is=691bb1be&hm=aab8d25f1609bb5aafae87cf0d0ab5f4e9fdfa113989b6cfd786be0c943eff79&'
  const GROWING_PLANT_IMG = 'https://images.unsplash.com/photo-1524594227082-cd1f9f3580f4?q=80&w=1400&auto=format&fit=crop'
  const SHARE_IMG = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop'

  const steps = [
    {
      title: 'Get your Cutty Box',
      text: 'DIY plant kit with dahlia cutting, soil, pot, fertilizer, and mini greenhouse.',
      img: CUTTY_BOX_IMG
    },
    {
      title: 'Grow at your own pace',
      text: 'Easy, guided growth with reminders and simple instructions.',
      img: GROWING_PLANT_IMG
    },
    {
      title: 'Share your journey',
      text: 'Post photos, celebrate milestones, and connect with others.',
      img: SHARE_IMG
    }
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-semibold text-emerald-900 text-center">How Cutty Works</h1>
      <div className="mt-10 grid gap-8">
        {steps.map((s, i)=> (
          <div key={i} className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl border border-emerald-100 p-6">
            <img src={s.img} alt={s.title} className="rounded-2xl"/>
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
