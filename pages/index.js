import Nav from '../components/Nav'
import CardLink from '../components/CardLink'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <div>
      <Nav />
      <main className='container'>
        <motion.h1 className='title' initial={{y:-8,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.4}}>Human Resource Management</motion.h1>
        <p className='lead'>Overview of employees, projects and servers. Click a card to view details.</p>

        <section className='grid'>
          <CardLink href='/employees' title='Employees' subtitle='Manage team members & availability' />
          <CardLink href='/projects' title='Projects' subtitle='View project progress & deployment status' />
          <CardLink href='/monitor' title='Server Monitor' subtitle='Live server states & deployment trends' />
        </section>
      </main>
    </div>
  )
}
