'use client'
import {useEffect} from 'react'
import {useRouter} from 'next/navigation'
export default function AdminLegacy(){const r=useRouter();useEffect(()=>r.replace('/adm'),[r]);return <main className="min-h-screen bg-[#090909]"/>}
