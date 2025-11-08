"use client"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "CureWave",
      description: "Ultimate Health Management Platform",
      tech: "MERN Stack, TailwindCSS, Postman, Firebase, APIs",
      color: "from-orange-600 to-orange-500",
      border: "border-orange-600",
      image: "curewave.png",
      links: [{ text: "Github", href: "https://github.com/SHUBHAMTOHAKE0203/CureWave", icon: "↗" }],
    },
    {
      id: 2,
      title: "AlumniConnect",
      description: "Connecting past, inspiring future",
      tech: "MERN Stack, TailwindCSS, Postman, Firebase, APIs.",
      color: "from-green-600 to-green-500",
      border: "border-green-600",
      image: "alumni.jpg",
      links: [{ text: "Github", href: "https://github.com/SHUBHAMTOHAKE0203/AlumniConnect", icon: "↗" }],
    },
    {
      id: 3,
      title: "Vismaya",
      description: "A Wonder For Women Safety And Health",
      tech: "React.js, TailwindCSS, Postman, Firebase, APIs.",
      color: "from-purple-600 to-purple-500",
      border: "border-purple-600",
      image: "vismaya.png",
      links: [{ text: "Github", href: "https://github.com/SHUBHAMTOHAKE0203/vismaya", icon: "↗" }],
    },
  ]

  return (
    <section id="works" className="py-24 px-6 md:px-12 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold">
            <span className="text-purple-400">#</span>projects
          </h2>
          <a href="https://github.com/SHUBHAMTOHAKE0203?tab=repositories" className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-mono">
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`border-2 ${project.border} rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group`}
            >
              
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="bg-slate-900/70 p-5 border-t border-slate-700">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm font-mono mb-3">{project.description}</p>
                <p className="text-slate-500 text-xs font-mono mb-4 leading-relaxed">{project.tech}</p>

                <div className="flex gap-2">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      className="border border-slate-600 text-slate-400 hover:border-purple-400 hover:text-purple-400 px-4 py-2 font-mono text-xs transition-all duration-300 rounded"
                    >
                      {link.text} {link.icon}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
