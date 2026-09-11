'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login(){
 const [u,setU]=useState('Lucas');
 const [p,setP]=useState('123');
 const r=useRouter();
 return <main className="min-h-screen w-full flex items-center justify-center bg-[#0A0A0A] px-4">
  <section className="w-full max-w-[360px] bg-[#111111] border border-[#262626] rounded-2xl p-6">
   <div className="text-center text-3xl font-black text-[#FF6B00] mb-7">HOPE+</div>
   <input value={u} onChange={e=>setU(e.target.value)} placeholder="Usuário" className="w-full h-12 px-4 rounded-xl bg-[#0A0A0A] border border-[#262626] text-white outline-none"/>
   <input value={p} onChange={e=>setP(e.target.value)} type="password" placeholder="Senha" className="w-full h-12 px-4 rounded-xl bg-[#0A0A0A] border border-[#262626] text-white outline-none mt-3"/>
   <button onClick={()=>{if(u&&p){localStorage.setItem('hope_user',JSON.stringify({nome:u}));localStorage.setItem('hope_auth','1');r.push('/aluno')}}} className="w-full h-12 mt-4 rounded-xl bg-[#FF6B00] text-white font-extrabold">ENTRAR</button>
  </section>
 </main>
}
