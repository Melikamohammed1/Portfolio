import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import portfolioImg from '../assets/portfolio.png'
import AfalagiImg from '../assets/afalagi.png'
import MosiacWall from '../assets/mosiacwall.png'
import PawsHome from '../assets/pwashome.jpg'

const projects = [
  
  {
    title: "Afalagi: Real Estate Lead & Viewing Manager",
    description: "Afalagi is a back-office productivity tool built for independent real estate agents. It helps manage property portfolios and track the buyer's journey by logging house viewings, recording client feedback, and monitoring interest levels, replacing messy notebooks with a clean, data-driven system.",
    tags: ["Flutter", "Dart","Node.js", "Express"],
    github: "https://github.com/abrahamopm/afalagi_mobile_app_project",
    demo: "",
    image: AfalagiImg,
  },
  {
    title: "National Digital Health Systems Monitoring Portal",
    description: "Working name of the deployed build: Mosaic Wall.A web-based portal that pulls multiple system dashboards into one browser view, for monitoring and stakeholder demonstration — replacing a workflow built on individual AnyDesk remote-desktop sessions.",
    tags: ["React", "vite", "Node.js"],
    github: "https://github.com/Melikamohammed1/National-Digital-Health-Systems-Monitoring-Portal",
    demo: "",
    image: MosiacWall,
  },
  {
    title: "PawsHome - Full Stack Pet Adoption Website",
    description: "PawsHome is a complete web application allowing users to browse pets for adoption, view detailed profiles, and contact the shelter. It demonstrates a full-stack architecture built from scratch without heavy backend frameworks.",
    tags: ["React", "vite", "Node.js"],
    github: "https://github.com/Melikamohammed1/Paws-home-pet-adoption",
    demo: "",
    image: PawsHome,
  },
  {
    title: "Personal Portfolio",
    description: "The site you're looking at, built from scratch with React, Tailwind CSS and Framer Motion.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Melikamohammed1/Portfolio",
    demo: "",
    image: portfolioImg,
  },
]

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeading title="Projects" subtitle="Things I've built" />

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
