'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function Login(){const [u,setU]=useState('Lucas');const [p,setP]=useState('123');const r=useRouter();return <main className="login"><section className="loginBox"><div className="logo">HOPE<span>+</span></div><input value={u} onChange={e=>setU(e.target.value)} placeholder="Usuário"/><input value={p} onChange={e=>setP(e.target.value)} type="password" placeholder="Senha"/><button onClick={()=>{if(u&&p){localStorage.setItem('hope_user',JSON.stringify({nome:u}));r.push('/aluno')}}}>ENTRAR</button></section></main>}
