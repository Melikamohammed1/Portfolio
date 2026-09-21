import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import profilePic from '../assets/profile.jpg'


function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeading title="About Me" subtitle="A little about who I am" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src={profilePic}
          alt="Melika Mohammed"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-48 aspect-square object-cover rounded-2xl"
        />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 leading-relaxed">
            I am Melika Mohammed, a 4th year Software Engineering student at Addis Ababa University specializing in full-stack web and cross-platform mobile development. Driven by a passion for clean architecture and performant code, I build intuitive, scalable digital experiences using tools like React, Node.js, and Flutter. Whether crafting responsive user interfaces or architecting robust backend systems, I am dedicated to turning complex problems into elegant, user-centered software solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
