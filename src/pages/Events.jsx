const API = import.meta.env.VITE_BACKEND_URL || ''

import { useEffect, useState } from 'react'

export default function Events(){
  const [events, setEvents] = useState([])
  useEffect(()=>{
    fetch(`${API}/events`).then(r=>r.json()).then(setEvents).catch(()=>{})
  },[])

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-emerald-900">Events & Challenges</h1>
        <p className="mt-2 text-slate-600">Seasonal activities, hashtag challenges, and local meet-ups.</p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {events.map(e => (
          <article key={e.id} className="p-6 rounded-3xl bg-white border border-emerald-100">
            <div className="text-sm text-emerald-700">{e.season}</div>
            <h3 className="text-xl font-semibold text-emerald-900">{e.title}</h3>
            <p className="mt-2 text-slate-600">{e.description}</p>
            {e.hashtag && <div className="mt-2 text-emerald-700">{e.hashtag}</div>}
          </article>
        ))}
      </div>

      <div className="mt-10 p-6 rounded-3xl bg-emerald-50 border border-emerald-100">
        <div className="font-semibold text-emerald-900">Local meet-ups</div>
        <p className="text-sm text-slate-600 mt-1">Find nearby gardeners and share tips in person.</p>
      </div>
    </section>
  )
}
