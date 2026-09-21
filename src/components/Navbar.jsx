const links=[
  { label:"Home", href: "#home"},
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

function Navbar() {
  return (
    <nav className= "fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-slate-900">
          Melika Mohammed
        </a>

        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div> 
    </nav>
  )
}

export default Navbar