'use client'
import {useState} from 'react'
export default function Login(){
 const [u,setU]=useState(''); const [p,setP]=useState('');
 const entrar=()=>{
   if(u==='lucas'&&p==='123'){localStorage.setItem('hope_auth','1');location.href='/aluno'}
   else alert('Use lucas / 123');
 }
 return(
 <div style={{minHeight:'100vh',background:'#0A0A0A',display:'flex',alignItems:'center',justifyContent:'center',padding:16}}>
   <div style={{width:'100%',maxWidth:360,background:'#111',border:'1px solid #262626',borderRadius:20,padding:24}}>
     <h1 style={{color:'#FF6B00',fontWeight:900,fontSize:28,textAlign:'center'}}>HOPE+</h1>
     <p style={{textAlign:'center',color:'#888',fontSize:13,marginTop:4}}>Área de Membros</p>
     <input value={u} onChange={e=>setU(e.target.value)} placeholder="Usuário" style={{width:'100%',marginTop:24,padding:12,borderRadius:10,background:'#0A0A0A',border:'1px solid #333',color:'#fff'}}/>
     <input value={p} onChange={e=>setP(e.target.value)} type="password" placeholder="Senha" style={{width:'100%',marginTop:12,padding:12,borderRadius:10,background:'#0A0A0A',border:'1px solid #333',color:'#fff'}}/>
     <button onClick={entrar} style={{width:'100%',marginTop:16,padding:12,borderRadius:10,background:'#FF6B00',color:'#fff',fontWeight:800,border:'none'}}>ENTRAR</button>
   </div>
 </div>)
}