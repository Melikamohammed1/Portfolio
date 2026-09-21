import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'
import { fadeUp, stagger } from '../animations'

const EMAIL = "melikamoh0953@gmail.com"
const GITHUB_URL = "https://github.com/Melikamohammed1"
const LINKEDIN_URL = "https://www.linkedin.com/in/melika-mohammed-bba53538a/"

const contactLinks = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: MailIcon },
  {
    label: "GitHub",
    value: "@Melikamohammed1",
    href: GITHUB_URL,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Let's connect",
    href: LINKEDIN_URL,
    icon: LinkedinIcon,
    external: true,
  },
]

const inputStyles =
  "w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"

function Contact() {
  const [form, setForm] = useState({ name: "", message: "" })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(form.message)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeading
        title="Contact"
        subtitle="Have a project or an opportunity in mind? Send me a message."
      />

      <div className="relative mx-auto max-w-md lg:max-w-5xl">
        <div className="absolute inset-x-8 -inset-y-6 -z-10 rounded-full bg-linear-to-r from-indigo-500/20 via-violet-500/20 to-cyan-400/20 blur-3xl" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 lg:grid-cols-3"
        >
          {contactLinks.map((link) => (
            <ContactLink key={link.label} {...link} />
          ))}
        </motion.div>
      </div>

      <div className="mx-auto my-12 flex max-w-xl items-center gap-4 text-sm text-slate-500">
        <span className="h-px flex-1 bg-white/10" />
        or send a message
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <motion.form
        onSubmit={handleSubmit}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-xl mx-auto flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell me about your project or opportunity..."
            value={form.message}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:shadow-indigo-500/50"
        >
          Send Message
        </button>

        {sent && (
          <p className="text-center text-sm text-slate-400">
            Your email app should open with the message ready to send. If it
            doesn't, use the cards above.
          </p>
        )}
      </motion.form>
    </section>
  )
}

export default Contact
