import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { fromLeft, fromRight, stagger } from '../animations'
import profilePic from '../assets/profile.jpg'

function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeading title="About Me" subtitle="A little about who I am" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center"
      >
        <motion.div variants={fromLeft} className="relative mx-auto">
          <div className="absolute -inset-3 rounded-3xl bg-linear-to-br from-indigo-500 to-cyan-400 opacity-40 blur-2xl" />
          <img
            src={profilePic}
            alt="Melika Mohammed"
            className="relative w-56 md:w-72 aspect-square object-cover rounded-3xl border border-white/10"
          />
        </motion.div>

        <motion.div
          variants={fromRight}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <p className="leading-relaxed text-slate-300">
            I am Melika Mohammed, a 4th year Software Engineering student at Addis Ababa University specializing in full-stack web and cross-platform mobile development. Driven by a passion for clean architecture and performant code, I build intuitive, scalable digital experiences using tools like React, Node.js, and Flutter. Whether crafting responsive user interfaces or architecting robust backend systems, I am dedicated to turning complex problems into elegant, user-centered software solutions.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
