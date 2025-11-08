"use client"

import { Github, Mail, Linkedin } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-20 border-r border-purple-500/30 bg-slate-900/50 backdrop-blur flex flex-col items-center justify-center gap-8 z-40">
      {/* Decorative dots */}
      <div className="flex flex-col gap-4 text-purple-400/30">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-1">
            {[...Array(4)].map((_, j) => (
              <div key={j} className="w-1 h-1 bg-purple-400 rounded-full"></div>
            ))}
          </div>
        ))}
      </div>

      {/* Social icons */}
      <div className="flex flex-col gap-6 mt-8">
        <a
          href="https://github.com/SHUBHAMTOHAKE0203"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-purple-400 transition-colors"
        >
          <Github size={24} />
        </a>
        <a href="tohakeshubham257@gmail.com" className="text-slate-400 hover:text-purple-400 transition-colors">
          <Mail size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/shubham-t-25b629236/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-purple-400 transition-colors"
        >
          <Linkedin size={24} />
        </a>
      </div>

      {/* Bottom decorative dots */}
      <div className="mt-auto mb-8 flex flex-col gap-4 text-purple-400/30">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-1">
            {[...Array(3)].map((_, j) => (
              <div key={j} className="w-1 h-1 bg-purple-400 rounded-full"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
