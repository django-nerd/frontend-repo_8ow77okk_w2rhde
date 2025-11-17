import { useEffect, useState } from 'react'
const API = import.meta.env.VITE_BACKEND_URL || ''

const CUTTY_BOX_IMG = 'https://cdn.discordapp.com/attachments/692077531272052768/1440123736064917534/image0.jpg?ex=691d033e&is=691bb1be&hm=aab8d25f1609bb5aafae87cf0d0ab5f4e9fdfa113989b6cfd786be0c943eff79&'
const REFILL_IMG = 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop'
const DEFAULT_IMG = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop'

export default function Shop(){
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch(`${API}/products`).then(r=>r.json()).then(setProducts).catch(()=>{})
  },[])

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-emerald-900">Shop</h1>
        <p className="mt-2 text-slate-600">Start your growth journey with the Cutty Box and more.</p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {products.map(p => {
          const isCutty = p.title?.toLowerCase().includes('cutty box')
          const isRefill = p.title?.toLowerCase().includes('refill')
          const img = isCutty ? CUTTY_BOX_IMG : (p.image_url || (isRefill ? REFILL_IMG : DEFAULT_IMG))
          const price = isCutty ? 12.95 : p.price
          return (
            <article key={p.id} className="p-6 rounded-3xl bg-white border border-emerald-100 flex gap-6 items-center">
              <img src={img} alt={p.title || 'product'} className="w-40 h-40 object-cover rounded-2xl"/>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-emerald-900">{p.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-emerald-800 font-semibold">${Number(price).toFixed(2)}</div>
                  <button className="px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50" disabled={!p.in_stock}>Add to cart</button>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
