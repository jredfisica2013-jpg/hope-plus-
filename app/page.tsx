'use client'
import {useEffect} from 'react'
import {useRouter} from 'next/navigation'
export default function Home(){const r=useRouter();useEffect(()=>r.replace('/aluno'),[r]);return <main className="min-h-screen bg-[#090909]"/>}
