'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type Course={id:string;tag:string;title:string;desc:string;thumb:string;progress:number;number:string}

const courses:Course[]=[
 {id:'codigo',tag:'CÓDIGO',title:'Código da Disciplina',desc:'Sistema integrado de transformação humana aplicado à vida real.',thumb:'/codigo.png',progress:75,number:'70'},
 {id:'sabotadores',tag:'MENTALIDADE',title:'7 Sabotadores da Disciplina',desc:'Identifique os padrões que sabotam sua execução.',thumb:'/sabotadores.png',progress:50,number:'7'},
 {id:'personal',tag:'NEGÓCIOS',title:'Personal Empresário',desc:'Transforme conhecimento, serviço e disciplina em negócio.',thumb:'/personal.png',progress:100,number:'12'},
 {id:'desafio70',tag:'DESAFIO',title:'Desafio 70 Dias',desc:'Um ciclo de execução para construir consistência.',thumb:'/desafio70.png',progress:30,number:'70'},
 {id:'pos',tag:'ESTUDO',title:'Pós-Graduação III',desc:'Conteúdos de estudo, repertório e aplicação prática.',thumb:'/pos.png',progress:40,number:'10'},
 {id:'mentoria',tag:'AO VIVO',title:'Mentoria',desc:'Direcionamentos para transformar intenção em execução.',thumb:'/mentoria.png',progress:20,number:'19'}
]

const menu=[['⌂','Início'],['▣','Cursos'],['◉','Comunidade'],['◆','Desafios'],['◇','Certificados'],['●','Perfil'],['⚙','Configurações']]

export default function Aluno(){
 const [name,setName]=useState('Lucas')
 const [items,setItems]=useState(courses)
 useEffect(()=>{
  try{
   const user=JSON.parse(localStorage.getItem('hope_user')||'null'); if(user?.nome) setName(user.nome)
   const saved=JSON.parse(localStorage.getItem('hope_content_v2')||'null'); if(Array.isArray(saved)) setItems(saved.map((x:any)=>({...courses.find(c=>c.id===x.id),...x})))
  }catch{}
 },[])
 return <div className="min-h-screen w-full bg-[#0A0A0A] text-white flex overflow-x-hidden">
  <aside className="hidden md:flex w-[240px] shrink-0 min-h-screen bg-[#111111] border-r border-[#222] flex-col p-5">
   <div className="text-[25px] font-black tracking-tight text-[#FF6B00] mb-10">HOPE+</div>
   <nav className="flex flex-col gap-1 flex-1">
    {menu.map(([icon,label],i)=><a key={label} href={i===0?'#':'#'} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm ${i===0?'bg-[#FF6B001A] text-[#FF6B00]':'text-[#8d8d8d] hover:text-white'}`}><span className="w-5 text-center">{icon}</span>{label}</a>)}
    <a href="/login" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#8d8d8d] mt-2"><span className="w-5 text-center">↪</span>Sair</a>
   </nav>
   <div className="text-[10px] text-[#555] px-3">HOPE+ · Disciplina aplicada</div>
  </aside>

  <main className="flex-1 min-w-0 px-4 py-5 md:px-8 lg:px-10 pb-24 md:pb-8">
   <header className="flex items-center justify-between gap-3 border-b border-[#1f1f1f] pb-5">
    <div className="text-base md:text-lg font-semibold">Área de Membros</div>
    <div className="flex items-center gap-2 md:gap-3 shrink-0">
     <span className="hidden sm:inline-flex rounded-full border border-[#262626] bg-[#111] px-3 py-2 text-xs text-[#ddd]">12 dias</span>
     <span className="hidden sm:inline-flex rounded-full border border-[#262626] bg-[#111] px-3 py-2 text-xs text-[#ddd]">Nível II</span>
     <span className="rounded-full border border-[#262626] bg-[#111] px-3 py-2 text-xs text-[#FF6B00] font-bold">350</span>
     <span className="flex items-center gap-2 rounded-full border border-[#262626] bg-[#111] py-1.5 pl-1.5 pr-3 text-xs font-semibold"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#FF6B00] text-white">{name[0]?.toUpperCase()}</span>{name}</span>
    </div>
   </header>

   <section className="pt-7 md:pt-9">
    <p className="text-xs uppercase tracking-[.18em] text-[#777] mb-2">Seu progresso</p>
    <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Olá, {name} - bem-vindo de volta! 🔥</h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
     {[['12','dias streak','🔥'],['1.240','XP acumulado','✦'],['3/6','concluídos','✓']].map(([value,label,icon])=><div key={label} className="rounded-2xl border border-[#262626] bg-[#171717] p-5"><div className="flex justify-between items-start"><span className="text-2xl font-black">{value}</span><span className="text-[#FF6B00]">{icon}</span></div><div className="text-xs text-[#777] mt-2">{label}</div></div>)}
    </div>

    <div className="flex items-end justify-between mt-10 mb-5"><div><h2 className="text-lg md:text-xl font-bold">Continue aprendendo</h2><p className="text-xs text-[#666] mt-1">Retome exatamente de onde parou.</p></div></div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
     {items.map(c=><Link href={`/aluno/${c.id}`} key={c.id} className="group block w-full min-w-0 overflow-hidden rounded-2xl border border-[#262626] bg-[#171717] hover:border-[#FF6B00]/40 transition-colors">
      <div className="relative w-full aspect-video bg-[#111] overflow-hidden"><img src={c.thumb||'/codigo.png'} alt="" className="w-full h-full object-cover"/><span className="absolute left-3 top-3 rounded-md bg-[#FF6B00] px-2 py-1 text-[9px] font-extrabold tracking-wide">{c.tag}</span><span className="absolute right-3 bottom-3 rounded-md bg-black/75 px-2 py-1 text-[10px] font-bold">{c.number}</span></div>
      <div className="p-4"><h3 className="text-base font-bold leading-tight">{c.title}</h3><p className="text-xs leading-5 text-[#858585] mt-2 min-h-[40px]">{c.desc}</p><div className="flex items-center justify-between mt-4 mb-2"><span className="text-[10px] text-[#777]">Progresso</span><span className="text-[10px] font-bold text-[#FF6B00]">{c.progress}%</span></div><div className="h-1 w-full rounded-full bg-[#292929] overflow-hidden"><div className="h-full bg-[#FF6B00]" style={{width:`${c.progress}%`}}/></div><div className="flex justify-end mt-4"><span className="rounded-lg bg-[#FF6B00] px-3 py-2 text-[9px] font-black">CONTINUAR →</span></div></div>
     </Link>)}
    </div>
   </section>
  </main>

  <nav className="fixed md:hidden bottom-0 left-0 right-0 z-50 h-16 bg-[#111111] border-t border-[#262626] grid grid-cols-4">
   {[['⌂','Início'],['▣','Cursos'],['◉','Comunidade'],['●','Perfil']].map(([icon,label],i)=><a href="#" key={label} className={`flex flex-col items-center justify-center gap-1 text-[9px] ${i===0?'text-[#FF6B00]':'text-[#777]'}`}><span className="text-lg leading-none">{icon}</span>{label}</a>)}
  </nav>
 </div>
}
