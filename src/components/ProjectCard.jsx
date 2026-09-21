import { motion } from 'framer-motion'
import { drop } from '../animations'

function ProjectCard({ title, description, tags, github, demo, image, index }) {
  return (
    <motion.article
      variants={drop}
      custom={(index % 2) * 0.15}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-[border-color,box-shadow] hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/10"
    >
      <div className="relative h-48 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-linear-to-br from-indigo-500 to-violet-600" />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-night/80 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="px-3 py-1 text-xs rounded-full border border-indigo-400/20 bg-indigo-500/10 text-indigo-200"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-5 text-sm font-medium">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-300 hover:text-white transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-300 hover:text-white transition-colors"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
