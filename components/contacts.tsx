"use client"

import { Github, Mail, Linkedin, Twitter } from "lucide-react"

export default function Contacts() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/SHUBHAMTOHAKE0203", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shubham-t-25b629236/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:tohakeshubham257@gmail.com", label: "Email" },
    { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  ]

  return (
    <section id="contacts" className="py-24 px-6 sm:px-8 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-purple-400">#</span>contacts
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-slate-400 text-sm font-mono leading-relaxed">
              I'm always excited to collaborate on projects, ideas, or just chat about web development. You can reach me
              through any of the platforms below!
            </p>

            

            {/* Social icons */}
            <div className="flex gap-6 mt-6">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Right Visual - Unique Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/30 to-purple-400/10 rounded-xl blur-lg transition-all duration-500 group-hover:blur-2xl"></div>
            <div className="relative border border-slate-700 rounded-xl p-12 bg-slate-800/50 flex flex-col items-center justify-center text-center">
            
              <h3 className="text-white text-2xl font-bold mb-2">Let's Connect!</h3>
              <p className="text-slate-400 font-mono text-sm">
                Click on any of the icons or reach me via Discord/Email. I promise to reply fast!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
