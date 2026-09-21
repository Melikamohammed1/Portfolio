import {motion} from 'framer-motion'

function Hero() {
  return (
    <section 
     id="home"
     className= "min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold text-slate-900"
      >
        Hi, I'm <span className="text-blue-600">Melika Mohammed</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-lg md:text-xl text-slate-600 max-w-xl"
      >
         Frontend Developer building clean, modern web experiences.
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
      >
        View My Work
      </motion.a>
    </section>
  )
}

export default Hero