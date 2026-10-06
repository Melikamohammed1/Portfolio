import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { fadeUp, stagger } from '../animations'

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "Tailwind CSS", "HTML & CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    title: "Database",
    items: ["MySQL", "MongoDb", "SQLite", "PostgreSQL"],

  },
  {
    title: "Programming",
    items: ["Python", "C++", "Java"],
  },
  {
    title: "Development",
    items: ["JSON", "API Integration", "Responsive Design", "CRUD Operations"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma"],
  },
]

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeading title="Skills" subtitle="Technologies I work with" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={fadeUp}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-colors hover:border-indigo-400/40 hover:bg-white/10"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              {group.title}
            </h3>

            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1 text-sm rounded-full border border-indigo-400/20 bg-indigo-500/10 text-indigo-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
