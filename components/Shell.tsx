'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const links = [['Home','/'],['About','/about'],['Industries','/industries'],['Case studies','/case-studies'],['News','/news'],['Contact','/contact']];
export function Logo(){ return <Link className="logo" href="/" aria-label="Quiet Gears home"><span>q</span> Quiet Gears</Link> }
export function Header(){ const [open,setOpen]=useState(false); const path=usePathname(); return <header><div className="nav-wrap"><Logo/><button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button><nav className={open?'open':''} aria-label="Main navigation">{links.map(([label,href])=><Link key={href} onClick={()=>setOpen(false)} className={path===href||href!=='/'&&path.startsWith(href)?'active':''} href={href}>{label}</Link>)}<Link className="nav-cta" href="/contact">Start a conversation <ArrowUpRight size={15}/></Link></nav></div></header> }
export function Footer(){return <footer><div className="footer-main"><div><Logo/><p>AI systems and software that keep<br/>ambitious British business moving.</p></div><div><b>Explore</b>{links.slice(1).map(([l,h])=><Link key={h} href={h}>{l}</Link>)}</div><div><b>Get in touch</b><a href="mailto:quietgearsai@gmail.com">quietgearsai@gmail.com</a><span>4 Foscote Mews, London · Servicing Nationwide</span></div></div><div className="footer-bottom"><span>© 2026 Quiet Gears Ltd</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/accessibility">Accessibility</Link></div></div></footer>}
