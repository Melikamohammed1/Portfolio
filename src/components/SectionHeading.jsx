import { motion } from 'framer-motion'
import { fadeUp } from '../animations'

function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-linear-to-r from-indigo-400 to-cyan-300" />
      {subtitle && (
        <p className="mt-4 text-slate-400 max-w-md mx-auto">{subtitle}</p>
      )}
    </motion.div>
  )
}

export default SectionHeading
