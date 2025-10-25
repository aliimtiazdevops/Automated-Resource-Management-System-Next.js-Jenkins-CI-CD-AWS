import Nav from '../components/Nav'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'

const projects = [
  {id:1,name:'Smart Parking',desc:'Smart parking web app',progress:72,status:'In Progress'},
  {id:2,name:'Car Rental',desc:'Car rental platform',progress:100,status:'Deployed'},
  {id:3,name:'E-commerce',desc:'Online store',progress:45,status:'Pending Review'}
]

export default function Projects(){
  return (
    <div>
      <Nav />
      <main className='container'>
        <motion.h1 className='title' initial={{x:-8,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.35}}>Projects</motion.h1>
        <p className='lead'>Active projects and their progress.</p>
        <div className='grid'>
          {projects.map(p=> <ProjectCard key={p.id} project={p} />)}
        </div>
      </main>
    </div>
  )
}
