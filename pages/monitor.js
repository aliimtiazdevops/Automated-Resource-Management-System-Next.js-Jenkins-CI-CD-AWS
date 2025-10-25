import Nav from '../components/Nav'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
const Charts = dynamic(()=>import('../components/Charts.client'), {ssr:false})

const servers = [
  {name:'EC2-Frontend',cpu:23,mem:40,state:'Running'},
  {name:'EC2-Backend',cpu:6,mem:18,state:'Running'},
  {name:'EC2-DB',cpu:0,mem:0,state:'Stopped'}
]

export default function Monitor(){
  return (
    <div>
      <Nav />
      <main className='container'>
        <motion.h1 className='title' initial={{x:-8,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.35}}>Monitor</motion.h1>
        <p className='lead'>Server metrics and deployment trends.</p>

        <div className='grid' style={{marginBottom:18}}>
          {servers.map(s=> (
            <div key={s.name} className='card'>
              <h3>{s.name}</h3>
              <p>Status: <strong>{s.state}</strong></p>
              <p>CPU: {s.cpu}%</p>
              <p>Memory: {s.mem}%</p>
            </div>
          ))}
        </div>

        <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.4}} className='card' style={{padding:18}}>
          <h3 style={{marginBottom:12}}>Monthly Deployments</h3>
          <Charts />
        </motion.div>
      </main>
    </div>
  )
}
