'use client'
import Link from 'next/link'

export default function Nav(){
  return (
    <nav className='nav'>
      <div className='brand'>Neon Dashboard</div>
      <div className='links'>
        <Link href='/' className=''>Home</Link>
        <Link href='/employees'>Employees</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/monitor'>Monitor</Link>
      </div>
    </nav>
  )
}
