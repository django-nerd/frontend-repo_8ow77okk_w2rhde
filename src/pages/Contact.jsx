import { useState } from 'react'
const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact(){
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  async function onSubmit(e){
    e.preventDefault()
    try{
      await fetch(`${API}/newsletter`,{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email, name})})
      await fetch(`${API}/contact`,{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email, name, message})})
      setSent(true)
    }catch(err){
      setSent(true)
    }
  }

  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-emerald-900">Join the Community</h1>
        <p className="mt-2 text-slate-600">Become part of Cutty – get updates, events, and gentle growth tips.</p>
      </div>

      {sent ? (
        <div className="mt-10 p-6 rounded-3xl bg-emerald-50 border border-emerald-100 text-emerald-900 text-center">Thanks! We'll be in touch soon.</div>
      ) : (
        <form onSubmit={onSubmit} className="mt-10 space-y-4 bg-white rounded-3xl border border-emerald-100 p-6">
          <div>
            <label className="block text-sm text-slate-600">Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 w-full rounded-xl border border-emerald-200 bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-300"/>
          </div>
          <div>
            <label className="block text-sm text-slate-600">Email</label>
            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 w-full rounded-xl border border-emerald-200 bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-300"/>
          </div>
          <div>
            <label className="block text-sm text-slate-600">Message</label>
            <textarea rows="4" value={message} onChange={(e)=>setMessage(e.target.value)} className="mt-1 w-full rounded-xl border border-emerald-200 bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-300"/>
          </div>
          <button className="w-full px-4 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700">Become part of the Cutty Community</button>
        </form>
      )}
    </section>
  )
}
