"use client"

import { Github, Mail, Dribbble ,Linkedin} from "lucide-react"

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/SHUBHAMTOHAKE0203", label: "GitHub" },
    { icon: Mail, href: "mailto:tohakeshubham257@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shubham-t-25b629236/", label: "Linkedin" },
  ]

  return (
    <section id="home" className="relative mt-7 min-h-screen flex items-center px-4 sm:px-8 py-12">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Left Sidebar */}
        <div className="hidden lg:flex lg:col-span-1 flex-col items-center gap-8 pt-8">
          <div className="flex flex-col gap-3 text-purple-400/40">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-2">
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 mt-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-purple-400 transition-all duration-300 hover:scale-125"
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>

          <div className="mt-auto mb-8 flex flex-col gap-3 text-purple-400/40">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-2">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-10 xl:col-span-11 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">

          {/* Text */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Shubham is a </span>
              <span className="text-purple-400">web designer</span>
              <span className="text-white"> and </span>
              <br className="hidden sm:block" />
              <span className="text-purple-400">full-stack developer</span>
            </h1>

            <p className="text-slate-400 text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
              He crafts responsive websites where technologies meet creativity
            </p>

            <button className="group w-fit mx-auto lg:mx-0 px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 font-mono text-sm font-semibold rounded">
             <a href="#contacts"> Contact me !!</a>
            </button>

            <div className="border border-slate-600 bg-slate-900/50 p-6 rounded hover:border-purple-500/50 transition-colors duration-300 max-w-md mx-auto lg:mx-0">
              <p className="text-slate-300 font-mono text-sm mb-2">
                With great code comes great debugging sessions!
              </p>
              <p className="text-slate-500 font-mono text-sm">— Who??</p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
             
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 aspect-square rounded-xl overflow-hidden border border-purple-500/40 bg-gradient-to-br from-purple-900/20 to-slate-900/10 shadow-xl">
              <img src="shubh.jpg" alt="Shubham" className="w-full h-full object-cover" />

              <div className="absolute bottom-3 ml-2 right-3 border border-purple-500 bg-slate-900/95 backdrop-blur px-3 py-1 rounded text-[10px] sm:text-xs font-mono text-purple-300">
                <span className="text-purple-400 mr-2">■</span>
                Currently working on <span className="text-white font-bold ml-1">Portfolio</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
