import { useEffect, useState } from 'react'
import { SmilePlus, Sprout, Hash } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Community(){
  const [feed, setFeed] = useState([])

  useEffect(()=>{
    fetch(`${API}/community/demo`).then(r=>r.json()).then(setFeed).catch(()=>{})
  },[])

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-emerald-900">Community</h1>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">A gentle social space for plant photos, mindful moments, and supportive cheer.</p>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {feed.map((item)=> (
            <article key={item.id} className="bg-white rounded-3xl border border-emerald-100 overflow-hidden">
              <img src={item.image_url} alt="post" className="w-full h-72 object-cover"/>
              <div className="p-5">
                <div className="text-sm text-emerald-700">{item.stage} {item.hashtags?.length>0 && (<span className="text-slate-400">•</span>)} {item.hashtags?.map(h=> <span key={h} className="text-emerald-700">{h} </span>)}</div>
                <p className="mt-2 text-slate-700">{item.caption}</p>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"><SmilePlus className="w-4 h-4"/> {item.cheers} cheers</button>
                  <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50"><Hash className="w-4 h-4"/> {item.hashtags?.[0] || '#Cutty'}</button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <aside className="space-y-4">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
            <div className="font-semibold text-emerald-900">Ask a Senior Gardener</div>
            <p className="text-sm text-slate-600 mt-1">Got a question? Post in the Q&A and get a friendly tip.</p>
            <button className="mt-3 px-4 py-2 rounded-full bg-emerald-600 text-white w-full">Ask a question</button>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-emerald-100">
            <div className="font-semibold text-emerald-900">Growth stages</div>
            <ul className="mt-2 text-sm text-slate-600 space-y-1">
              <li>• Seedling → early sprouts</li>
              <li>• Growing → leaves & stems</li>
              <li>• Blooming → flowers & joy</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}
