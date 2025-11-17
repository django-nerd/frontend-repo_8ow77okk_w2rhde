import { useEffect, useMemo, useRef, useState } from 'react'
import { SmilePlus, Hash, MessageSquarePlus, SendHorizonal, Sprout, Plus } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Community(){
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filterTag, setFilterTag] = useState('')

  // Composer state
  const [name, setName] = useState('')
  const [caption, setCaption] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [stage, setStage] = useState('Seedling')
  const [tags, setTags] = useState('')
  const composerRef = useRef(null)

  // Comment inputs per post
  const [commentText, setCommentText] = useState({})
  const [commentName, setCommentName] = useState({})

  const fetchPosts = async ()=>{
    setLoading(true)
    setError('')
    try {
      const r = await fetch(`${API}/community/posts`)
      if (!r.ok) throw new Error('Failed to load posts')
      const data = await r.json()
      setPosts(data)
    } catch (e) {
      try {
        const r = await fetch(`${API}/community/demo`)
        const data = await r.json()
        setPosts(data)
      } catch (e2) {
        setError('Unable to load community right now.')
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{ fetchPosts() },[])

  const filtered = useMemo(()=>{
    if (!filterTag) return posts
    return posts.filter(p => (p.hashtags||[]).some(t => t.toLowerCase() === filterTag.toLowerCase()))
  }, [posts, filterTag])

  const onCreatePost = async (e)=>{
    e.preventDefault()
    const payload = {
      name: name || 'guest',
      caption,
      image_url: imageUrl || undefined,
      stage,
      hashtags: tags
        .split(/[,#]/)
        .map(t=>t.trim())
        .filter(Boolean)
        .map(t=> t.startsWith('#') ? t : `#${t}`)
    }
    try {
      const r = await fetch(`${API}/community/posts`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      if (!r.ok) throw new Error('Failed to post')
      setCaption(''); setImageUrl(''); setTags('')
      fetchPosts()
    } catch (e) {
      alert('Could not create post. Please try again.')
    }
  }

  const onCheer = async (id)=>{
    try {
      const r = await fetch(`${API}/community/posts/${id}/cheer`, { method:'POST' })
      if (!r.ok) throw new Error('Failed')
      const data = await r.json()
      setPosts(prev => prev.map(p => p.id === id ? { ...p, cheers: data.cheers } : p))
    } catch (e) {
      // fallback: optimistic
      setPosts(prev => prev.map(p => p.id === id ? { ...p, cheers: (p.cheers||0)+1 } : p))
    }
  }

  const onAddComment = async (postId)=>{
    const text = commentText[postId]
    const nm = commentName[postId] || 'guest'
    if (!text?.trim()) return
    try {
      const r = await fetch(`${API}/community/posts/${postId}/comments`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name: nm, text }) })
      if (!r.ok) throw new Error('Failed')
      // refresh comments for this post
      const rc = await fetch(`${API}/community/posts/${postId}/comments`)
      const comments = await rc.json()
      setPosts(prev => prev.map(p => p.id === postId ? { ...p, comments: comments.map(c=> ({ id:c.id, user_id:c.user_id, text:c.text })) } : p))
      setCommentText(prev => ({ ...prev, [postId]: '' }))
    } catch (e) {
      alert('Could not add comment. Please try again.')
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-emerald-900">Community</h1>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">A gentle social space for plant photos, mindful moments, and supportive cheer.</p>
      </div>

      {/* Composer */}
      <div ref={composerRef} className="mt-8 bg-white border border-emerald-100 rounded-3xl p-5">
        <div className="text-emerald-900 font-medium mb-3 flex items-center gap-2"><Plus className="w-4 h-4"/> Share your plant moment</div>
        <form onSubmit={onCreatePost} className="grid sm:grid-cols-2 gap-4">
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="px-4 py-2 rounded-xl border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
          <select value={stage} onChange={e=>setStage(e.target.value)} className="px-4 py-2 rounded-xl border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-200">
            <option>Seedling</option>
            <option>Growing</option>
            <option>Blooming</option>
          </select>
          <input value={imageUrl} onChange={e=>setImageUrl(e.target.value)} placeholder="Image URL (optional)" className="px-4 py-2 rounded-xl border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-200 sm:col-span-2" />
          <input value={tags} onChange={e=>setTags(e.target.value)} placeholder="#FirstSprout, #MindfulMoment" className="px-4 py-2 rounded-xl border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-200 sm:col-span-2" />
          <textarea value={caption} onChange={e=>setCaption(e.target.value)} placeholder="Write a kind caption..." className="px-4 py-2 rounded-xl border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-200 sm:col-span-2" rows={3} />
          <div className="sm:col-span-2 flex justify-end">
            <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"><SendHorizonal className="w-4 h-4"/> Post</button>
          </div>
        </form>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        <button onClick={()=>setFilterTag('')} className={`px-3 py-1.5 rounded-full border ${!filterTag? 'bg-emerald-600 text-white border-emerald-600':'bg-white text-emerald-700 border-emerald-200'}`}>All</button>
        {['#SpringStart','#FirstSprout','#MindfulMoment','#Cutty'].map(t=> (
          <button key={t} onClick={()=>setFilterTag(t)} className={`px-3 py-1.5 rounded-full border ${filterTag===t? 'bg-emerald-600 text-white border-emerald-600':'bg-white text-emerald-700 border-emerald-200'}`}>{t}</button>
        ))}
      </div>

      {loading && (
        <div className="mt-10 text-center text-slate-500">Loading community…</div>
      )}
      {error && (
        <div className="mt-6 text-center text-rose-600">{error}</div>
      )}

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {filtered.map((item)=> (
            <article key={item.id || item._id || Math.random()} className="bg-white rounded-3xl border border-emerald-100 overflow-hidden">
              {item.image_url && (
                <img src={item.image_url} alt="post" className="w-full h-72 object-cover"/>
              )}
              <div className="p-5">
                <div className="text-sm text-emerald-700 flex flex-wrap items-center gap-2">
                  <span>{item.stage || 'Seedling'}</span>
                  {(item.hashtags?.length>0) && (<span className="text-slate-300">•</span>)}
                  {(item.hashtags||[]).map(h=> (
                    <button key={h} onClick={()=>setFilterTag(h)} className="text-emerald-700 hover:underline">{h}</button>
                  ))}
                </div>
                <p className="mt-2 text-slate-700">{item.caption}</p>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <button onClick={()=> item.id && onCheer(item.id)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"><SmilePlus className="w-4 h-4"/> {item.cheers || 0} cheers</button>
                  {(item.hashtags?.[0]) && (
                    <button onClick={()=>setFilterTag(item.hashtags[0])} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50"><Hash className="w-4 h-4"/> {item.hashtags[0]}</button>
                  )}
                </div>

                {/* Comments */}
                <div className="mt-5">
                  <div className="text-sm font-medium text-emerald-900 mb-2">Comments</div>
                  <div className="space-y-2">
                    {(item.comments || []).map(c => (
                      <div key={c.id || Math.random()} className="text-sm text-slate-700"><span className="font-medium text-emerald-800">{c.user_id || 'user'}</span>: {c.text}</div>
                    ))}
                    {(item.comments || []).length === 0 && (
                      <div className="text-sm text-slate-500">Be the first to leave a kind note 🌱</div>
                    )}
                  </div>

                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-4 gap-2">
                    <input value={commentName[item.id]||''} onChange={e=> setCommentName(prev=> ({...prev, [item.id]: e.target.value}))} placeholder="Name" className="px-3 py-2 rounded-xl border border-emerald-100" />
                    <input value={commentText[item.id]||''} onChange={e=> setCommentText(prev=> ({...prev, [item.id]: e.target.value}))} placeholder="Write a comment…" className="px-3 py-2 rounded-xl border border-emerald-100 sm:col-span-2" />
                    <button onClick={()=> item.id && onAddComment(item.id)} className="px-3 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 inline-flex items-center justify-center gap-2"><MessageSquarePlus className="w-4 h-4"/> Add</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <aside className="space-y-4">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
            <div className="font-semibold text-emerald-900">Ask a Senior Gardener</div>
            <p className="text-sm text-slate-600 mt-1">Got a question? Post in the feed and get a friendly tip.</p>
            <button onClick={()=> composerRef.current?.scrollIntoView({behavior:'smooth'})} className="mt-3 px-4 py-2 rounded-full bg-emerald-600 text-white w-full">Ask a question</button>
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
