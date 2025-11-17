import { Link, NavLink } from 'react-router-dom'
import { Leaf, ShoppingBag, Sparkles, Smile, Users, BookOpen, Calendar, Mail } from 'lucide-react'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How it Works' },
  { to: '/community', label: 'Community' },
  { to: '/learn', label: 'Learn' },
  { to: '/events', label: 'Events' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Join' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-md border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-lime-400 text-white flex items-center justify-center shadow-sm">
            <Leaf className="w-6 h-6" />
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-emerald-900">Cutty</div>
            <div className="text-xs text-emerald-600">Grow Happiness Together</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={({isActive})=> `transition-colors hover:text-emerald-700 ${isActive ? 'text-emerald-700 font-medium' : 'text-slate-600'}`}>{n.label}</NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/community" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-sm">
            <Users className="w-4 h-4" /> Join
          </Link>
          <Link to="/shop" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition">
            <ShoppingBag className="w-4 h-4" /> Start Kit
          </Link>
        </div>
      </div>
    </header>
  )
}
