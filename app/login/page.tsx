'use client'
import {useEffect} from 'react'
import {useRouter} from 'next/navigation'
export default function Login(){const r=useRouter();useEffect(()=>{r.replace('/aluno')},[r]);return <main className="min-h-screen bg-[#0A0A0A]"/>}
