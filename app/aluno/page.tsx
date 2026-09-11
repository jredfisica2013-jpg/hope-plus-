'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Flame, Trophy, Check, Play, Home, BookOpen, Users, Target, Award, User, Settings, LogOut } from 'lucide-react'

type Course={id:string;tag:string;title:string;desc:string;thumb:string;progress:number;number:string}

const courses:Course[]=[
 {id:'codigo',tag:'CÓDIGO',title:'Código da Disciplina',desc:'Sistema integrado de transformação humana aplicado à vida real.',thumb:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',progress:75,number:'70'},
 {id:'sabotadores',tag:'MENTALIDADE',title:'7 Sabotadores da Disciplina',desc:'Identifique os padrões que sabotam sua execução.',thumb:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85',progress:50,number:'7'},
 {id:'personal',tag:'NEGÓCIOS',title:'Personal Empresário',desc:'Transforme conhecimento, serviço e disciplina em negócio.',thumb:'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',progress:100,number:'12'},
 {id:'desafio70',tag:'DESAFIO',title:'Desafio 70 Dias',desc:'Um ciclo de execução para construir consistência.',thumb:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',progress:30,number:'70'},
 {id:'pos',tag:'ESTUDO',title:'Pós-Graduação III',desc:'Conteúdos de estudo, repertório e aplicação prática.',thumb:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85',progress:40,number:'10'},
 {id:'mentoria',tag:'AO VIVO',title:'Mentoria',desc:'Direcionamentos para transformar intenção em execução.',thumb:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85',progress:20,number:'19'}
]

const menu=[['Início',Home],['Cursos',BookOpen],['Comunidade',Users],['Desafios',Target],['Certificados',Award],['Perfil',User],['Configurações',Settings]] as const

export default function Aluno(){
 const [name,setName]=useState('Lucas'); const [items,setItems]=useState(courses)
 useEffect(()=>{try{const u=JSON.parse(localStorage.getItem('hope_user')||'null');if(u?.nome)setName(u.nome);const saved=JSON.parse(localStorage.getItem('hope_content_v2')||'null');if(Array.isArray(saved))setItems(saved.map((x:any)=>({...courses.find(c=>c.id===x.id),...x,thumb:x.thumb?.startsWith('http')?x.thumb:courses.find(c=>c.id===x.id)?.thumb})).filter(Boolean))}catch{}},[])
 return <div className="min-h-screen w-full bg-[#0A0A0A] text-white flex overflow-x-hidden">
  <aside className="hidden md:flex w-[240px] shrink-0 min-h-screen bg-[#111] border-r border-[#262626] flex-col p-5">
   <div className="text-[26px] font-extrabold tracking-tight text-[#FF6B00] mb-10">HOPE+</div>
   <nav className="flex flex-col gap-1 flex-1">{menu.map(([label,Icon],i)=><a key={label} href="#" className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${i===0?'bg-[#FF6B0018] text-[#FF6B00]':'text-[#888] hover:text-white hover:bg-[#171717]'}`}><Icon size={18}/>{label}</a>)}<a href="/login" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#888] mt-2"><LogOut size={18}/>Sair</a></nav>
   <div className="text-[10px] text-[#555] px-3">HOPE+ · Disciplina aplicada</div>
  </aside>
  <main className="flex-1 min-w-0 px-4 py-5 md:px-8 lg:px-10 pb-24 md:pb-8">
   <header className="flex items-center justify-between gap-3 border-b border-[#262626] pb-5"><div className="text-base md:text-lg font-semibold">Área de Membros</div><div className="flex items-center gap-2 md:gap-3"><span className="hidden sm:inline-flex rounded-full border border-[#262626] bg-[#151515] px-3 py-2 text-xs text-[#ddd]">12 dias</span><span className="hidden sm:inline-flex rounded-full border border-[#262626] bg-[#151515] px-3 py-2 text-xs text-[#ddd]">Nível II</span><span className="rounded-full border border-[#262626] bg-[#151515] px-3 py-2 text-xs text-[#FF6B00] font-bold">350</span><span className="flex items-center gap-2 rounded-full border border-[#262626] bg-[#151515] py-1.5 pl-1.5 pr-3 text-xs font-semibold"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#FF6B00]">{name[0]?.toUpperCase()}</span>{name}</span></div></header>
   <section className="pt-7 md:pt-9"><p className="text-xs uppercase tracking-[.18em] text-[#666] mb-2">Seu progresso</p><h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Olá, {name} - bem-vindo de volta! 🔥</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">{[[<Flame size={20}/>, '12','DIAS STREAK'],[<Trophy size={20}/>, '1.240','XP ACUMULADO'],[<Check size={20}/>, '3/6','CONCLUÍDOS']].map(([icon,value,label])=><div key={label as string} className="rounded-2xl border border-[#262626] bg-[#151515] p-5 shadow-[0_8px_30px_rgba(0,0,0,.18)]"><div className="flex justify-between items-start"><span className="text-[28px] leading-none font-extrabold">{value}</span><span className="text-[#FF6B00]">{icon}</span></div><div className="text-[12px] uppercase tracking-wide text-[#666] mt-3">{label}</div></div>)}</div>
    <div className="mt-10 mb-5"><h2 className="text-lg md:text-xl font-bold">Continue aprendendo</h2><p className="text-xs text-[#666] mt-1">Retome exatamente de onde parou.</p></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">{items.map(c=><Link href={`/aluno/${c.id}`} key={c.id} className="group block w-full min-w-0 overflow-hidden rounded-2xl border border-[#262626] bg-[#151515] hover:border-[#FF6B00]/50 transition"><div className="relative h-[160px] w-full bg-[#111] overflow-hidden" style={{backgroundImage:`url(${c.thumb})`,backgroundSize:'cover',backgroundPosition:'center'}}><span className="absolute left-3 top-3 rounded-md bg-[#FF6B00] px-2 py-1 text-[10px] font-extrabold text-white">{c.tag}</span></div><div className="p-4"><h3 className="text-base font-bold leading-tight">{c.title}</h3><p className="text-[13px] leading-5 text-[#888] mt-2 min-h-[40px]">{c.desc}</p><div className="flex items-center justify-between mt-4 mb-2"><span className="text-[10px] text-[#666]">Progresso</span><span className="text-[10px] font-bold text-[#FF6B00]">{c.progress}%</span></div><div className="h-1 w-full rounded-full bg-[#222] overflow-hidden"><div className="h-full bg-[#FF6B00]" style={{width:`${c.progress}%`}}/></div><div className="flex justify-end mt-4"><span className="inline-flex items-center gap-1 rounded-full bg-[#FF6B00] px-4 py-2 text-[12px] font-bold"><Play size={11} fill="currentColor"/>CONTINUAR</span></div></div></Link>)}</div>
   </section>
  </main>
  <nav className="fixed md:hidden bottom-0 left-0 right-0 z-50 h-16 bg-[#111] border-t border-[#262626] grid grid-cols-4">{[[Home,'Início'],[BookOpen,'Cursos'],[Users,'Comunidade'],[User,'Perfil']].map(([Icon,label],i)=><a href="#" key={label as string} className={`flex flex-col items-center justify-center gap-1 text-[10px] ${i===0?'text-[#FF6B00]':'text-[#777]'}`}><Icon size={19}/>{label}</a>)}</nav>
 </div>
}
