'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type C={id:string;tag:string;title:string;desc:string;thumb:string;video:string;progress:number}
const defaults:C[]=[
{id:'codigo',tag:'CÓDIGO',title:'Código da Disciplina',desc:'Sistema integrado de transformação humana aplicado à vida real.',thumb:'/codigo.svg',video:'https://www.youtube.com/embed/dQw4w9WgXcQ',progress:75},
{id:'sabotadores',tag:'MENTALIDADE',title:'7 Sabotadores da Disciplina',desc:'Identifique os padrões que sabotam sua execução.',thumb:'/sabotadores.svg',video:'https://www.youtube.com/embed/dQw4w9WgXcQ',progress:50},
{id:'personal',tag:'NEGÓCIOS',title:'Personal Empresário',desc:'Estratégia para transformar conhecimento em negócio.',thumb:'/personal.svg',video:'https://www.youtube.com/embed/dQw4w9WgXcQ',progress:100},
{id:'desafio70',tag:'DESAFIO',title:'Desafio 70 Dias',desc:'Um ciclo de execução para construir consistência.',thumb:'/desafio70.svg',video:'https://www.youtube.com/embed/dQw4w9WgXcQ',progress:30},
{id:'pos',tag:'ESTUDO',title:'Pós-Graduação III',desc:'Conteúdos de estudo e aplicação prática.',thumb:'/pos.svg',video:'https://www.youtube.com/embed/dQw4w9WgXcQ',progress:40},
{id:'mentoria',tag:'AO VIVO',title:'Mentoria',desc:'Direcionamento para transformar intenção em execução.',thumb:'/mentoria.svg',video:'https://www.youtube.com/embed/dQw4w9WgXcQ',progress:20}
]
function Icon({children}:{children:React.ReactNode}){return <span className="text-lg leading-none">{children}</span>}
export default function Aluno(){
 const [cs,setCs]=useState<C[]>(defaults); const [name,setName]=useState('Lucas')
 useEffect(()=>{try{const x=JSON.parse(localStorage.getItem('hope_content_v2')||'null');if(x)setCs(x);const u=JSON.parse(localStorage.getItem('hope_user')||'null');if(u?.nome)setName(u.nome)}catch{}},[])
 const menu=[['⌂','Início'],['▣','Cursos'],['♧','Comunidade'],['◆','Desafios'],['◇','Certificados'],['◎','Perfil'],['⚙','Configurações']]
 return <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
  <aside className="fixed left-0 top-0 bottom-0 z-40 hidden w-[240px] flex-col bg-[#111111] border-r border-[#242424] md:flex">
   <div className="flex h-20 items-center px-7"><span className="text-2xl font-black tracking-tight">HOPE<span className="text-[#FF6B00]">+</span></span></div>
   <nav className="flex flex-1 flex-col gap-1 px-3 py-5">{menu.map(([i,t],n)=><Link key={t} href={n===0?'/aluno':'#'} className={`flex h-11 items-center gap-3 rounded-lg px-4 text-sm font-medium ${n===0?'bg-[#FF6B00]/10 text-[#FF6B00]':'text-[#888] hover:bg-[#191919] hover:text-white'}`}><Icon>{i}</Icon><span>{t}</span></Link>)}<Link href="/login" className="mt-auto flex h-11 items-center gap-3 rounded-lg px-4 text-sm font-medium text-[#888]"><Icon>↪</Icon><span>Sair</span></Link></nav>
  </aside>
  <header className="fixed left-0 right-0 top-0 z-30 h-20 border-b border-[#242424] bg-[#0A0A0A]/95 backdrop-blur md:left-[240px]">
   <div className="flex h-full items-center justify-between px-5 md:px-8"><div className="flex items-center gap-4"><span className="text-lg font-semibold md:text-xl">Área de Membros</span></div><div className="flex items-center gap-2 md:gap-3"><span className="hidden rounded-full border border-[#2b2b2b] bg-[#171717] px-3 py-1.5 text-xs font-semibold text-[#ddd] sm:inline-flex">12 dias</span><span className="hidden rounded-full border border-[#2b2b2b] bg-[#171717] px-3 py-1.5 text-xs font-semibold text-[#ddd] sm:inline-flex">Nível II</span><span className="hidden rounded-full border border-[#2b2b2b] bg-[#171717] px-3 py-1.5 text-xs font-semibold text-[#FF6B00] sm:inline-flex">350 XP</span><span className="text-xs font-semibold text-[#ddd] md:text-sm">{name}</span><span className="grid h-9 w-9 place-items-center rounded-full bg-[#FF6B00] text-sm font-black text-black">{name.slice(0,1).toUpperCase()}</span></div></div>
  </header>
  <main className="px-4 pb-28 pt-28 md:ml-[240px] md:px-8 md:pb-12 md:pt-28 lg:px-10">
   <div className="mx-auto max-w-[1240px]">
    <div className="mb-8"><p className="mb-2 text-xs font-semibold uppercase tracking-[.18em] text-[#FF6B00]">Sua jornada</p><h1 className="text-2xl font-bold tracking-tight md:text-3xl">Olá, {name} - bem-vindo de volta! 🔥</h1></div>
    <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
     {[['12','dias streak','🔥'],['1.240','XP acumulado','⚡'],['3/6','concluídos','✓']].map(([v,l,i])=><div key={l} className="rounded-2xl border border-[#262626] bg-[#171717] p-5"><div className="mb-4 flex items-center justify-between"><span className="text-2xl">{i}</span><span className="text-[10px] font-bold uppercase tracking-wider text-[#666]">HOPE+</span></div><div className="text-2xl font-black">{v}</div><div className="mt-1 text-xs text-[#888]">{l}</div></div>)}
    </div>
    <div className="mb-5 flex items-end justify-between"><div><h2 className="text-xl font-bold md:text-2xl">Continue aprendendo</h2><p className="mt-1 text-xs text-[#777]">Retome sua jornada de onde parou.</p></div><span className="hidden text-xs font-semibold text-[#666] md:block">6 conteúdos</span></div>
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">{cs.map(c=><Link key={c.id} href={`/aluno/${c.id}`} className="group min-w-0 overflow-hidden rounded-2xl border border-[#262626] bg-[#171717] transition hover:border-[#FF6B00]/50">
      <div className="relative aspect-video w-full overflow-hidden bg-[#111]"><img src={c.thumb} alt="" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"/><span className="absolute left-3 top-3 rounded-md bg-[#FF6B00] px-2 py-1 text-[9px] font-black tracking-wide">{c.tag}</span><span className="absolute right-3 bottom-3 rounded-md bg-black/75 px-2 py-1 text-[10px] font-bold">70</span></div>
      <div className="p-4"><h3 className="text-base font-bold">{c.title}</h3><p className="mt-1 min-h-[36px] text-xs leading-5 text-[#888]">{c.desc}</p><div className="mt-4 flex items-center justify-between text-[10px] text-[#777]"><span>{c.progress}% concluído</span><span>{c.progress>=100?'Concluído':'Continuar'}</span></div><div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-[#2b2b2b]"><span className="block h-full bg-[#FF6B00]" style={{width:`${c.progress}%`}}/></div></div>
    </Link>)}</div>
   </div>
  </main>
  <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-[68px] items-center justify-around border-t border-[#262626] bg-[#111111] md:hidden">{[['⌂','Início'],['▣','Cursos'],['◆','Desafios'],['◎','Perfil']].map(([i,t],n)=><Link key={t} href={n<2?'/aluno':'#'} className={`flex flex-col items-center gap-1 text-[10px] ${n===0?'text-[#FF6B00]':'text-[#777]'}`}><Icon>{i}</Icon><span>{t}</span></Link>)}</nav>
 </div>
}
