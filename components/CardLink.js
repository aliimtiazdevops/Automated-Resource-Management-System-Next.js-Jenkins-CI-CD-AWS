import Link from 'next/link'

export default function CardLink({href,title,subtitle,children}){
  return (
    <Link href={href} className='card' >
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        {children}
      </div>
    </Link>
  )
}
