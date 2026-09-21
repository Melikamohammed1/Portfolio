import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../animations'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center max-w-3xl"
      >
        <motion.span
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
          4th-year Software Engineering student
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white"
        >
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
            Melika Mohammed
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl"
        >
          Frontend Developer building clean, modern web experiences.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-7 py-3 font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:shadow-indigo-500/50"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
