import { Link } from 'react-router-dom'
import { Sprout, Users, BookOpen, Calendar, ShoppingBag } from 'lucide-react'

export default function Home(){
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/40 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-lime-200/40 blur-3xl rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 mb-6">
            <Sprout className="w-4 h-4" /> Grow with us
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-emerald-900 tracking-tight">Grow plants. Grow happiness.</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">A gentle social platform where people share plant progress, support each other, and build real happiness through nature.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/community" className="px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700">Join the Community</Link>
            <Link to="/shop" className="px-6 py-3 rounded-full bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50">Start Your Cutty Kit</Link>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {title:'Community Feed', to:'/community', icon: Users},
              {title:'How it Works', to:'/how-it-works', icon: Sprout},
              {title:'Learn & Science', to:'/learn', icon: BookOpen},
              {title:'Events', to:'/events', icon: Calendar},
              {title:'Shop', to:'/shop', icon: ShoppingBag},
            ].map((card)=> (
              <Link key={card.title} to={card.to} className="group rounded-2xl bg-white/70 border border-emerald-100 p-5 hover:border-emerald-200 hover:shadow-sm transition flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-100">
                  <card.icon className="w-5 h-5" />
                </div>
                <div className="font-medium text-emerald-900">{card.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop" alt="hands holding a plant-growing kit box with pots and soil" className="rounded-3xl shadow-sm" loading="eager"/>
          <div>
            <h2 className="text-3xl font-semibold text-emerald-900">Happiness, grown gently</h2>
            <p className="mt-3 text-slate-600">Cutty combines a DIY Dahlia growing kit with a warm, positive community. Grow at your own pace, share little wins, and discover science-backed ways to feel better.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Calming routines and mindful moments</li>
              <li>• Friendly cheers instead of likes</li>
              <li>• Safe, inclusive space</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
