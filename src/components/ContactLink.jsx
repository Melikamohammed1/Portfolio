import { motion } from 'framer-motion'
import { pop } from '../animations'

function ContactLink({ href, icon: Icon, label, value, external }) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      variants={pop}
      whileHover={{ y: -6, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="group block rounded-2xl bg-linear-to-br from-indigo-500/60 via-white/10 to-cyan-400/60 p-px shadow-lg shadow-indigo-500/20 transition-shadow hover:shadow-indigo-500/50"
    >
      <div className="flex items-center gap-4 rounded-[calc(1rem-1px)] bg-night px-5 py-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/30">
          <Icon className="h-6 w-6" />
        </div>

        <div className="min-w-0">
          <p className="font-semibold text-white">{label}</p>
          <p className="truncate text-sm text-slate-400">{value}</p>
        </div>

        <span
          aria-hidden="true"
          className="ml-auto text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
        >
          ↗
        </span>
      </div>
    </motion.a>
  )
}

export default ContactLink
