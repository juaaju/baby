import { motion } from 'framer-motion'
import {Link} from "react-router-dom"

const App = () => {
  return (
    <div className='flex parent h-full flex-col items-center gap-4 p-10 bg-white text-teks text-center justify-center py-10'>
    <motion.img initial={{ opacity: 1, rotateY:40 }} animate={{ opacity: 1, rotateY:0, transition: { duration: 10, } }} className='w-[400px]' src="../src/assets/babywhite.png" alt="" />
    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1,y:0,  transition: { duration: 2, } }} className=' text-[40px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Antropometri Digital</motion.h1>
    <motion.p className='text-subteks font-light mb-4'>Pengukuran bayi menggunakan kamera yang terintegrasi  dengan sistem AI</motion.p>
    <Link to="/camera" className='self-center border-[1px] border-black rounded-2xl p-2 px-10 bg-gradient-to-br from-white/40 via-white/20 to-transparent'>Mulai Pengukuran</Link>
    </div>
  )
}

export default App
