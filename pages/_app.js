import '../styles/globals.css'
import { motion } from 'framer-motion'

export default function App({Component,pageProps}){
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
      <Component {...pageProps} />
    </motion.div>
  )
}
