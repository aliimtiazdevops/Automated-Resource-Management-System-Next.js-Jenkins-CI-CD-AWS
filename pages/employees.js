import Nav from '../components/Nav'
import EmployeeCard from '../components/EmployeeCard'
import { motion } from 'framer-motion'

const employees = [
  {id:1,name:'Ali Imtiaz',role:'DevOps Engineer',team:'Platform',status:'Online'},
  {id:2,name:'Farzeen Ali',role:'Frontend Engineer',team:'Web',status:'Online'},
  {id:3,name:'Sara Khan',role:'Backend Engineer',team:'API',status:'Offline'},
  {id:4,name:'Usman Ali',role:'QA Engineer',team:'Quality',status:'Online'}
]

export default function Employees(){
  return (
    <div>
      <Nav />
      <main className='container'>
        <motion.h1 className='title' initial={{x:-8,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.35}}>Employees</motion.h1>
        <p className='lead'>Team members and availability.</p>
        <div className='list-card'>
          {employees.map(e=> <EmployeeCard key={e.id} employee={e} />)}
        </div>
      </main>
    </div>
  )
}
