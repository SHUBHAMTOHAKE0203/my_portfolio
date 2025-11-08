"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#home", label: "#home" },
    { href: "#works", label: "#works" },
    { href: "#about-me", label: "#about-me" },
    { href: "#contacts", label: "#contacts" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 border-b border-slate-700/50 bg-slate-950/95 backdrop-blur-md z-40">
      <div className="max-w-7xl mx-auto h-full px-8 flex justify-between items-center">

        {/* Logo */}
        <div className="text-lg font-bold text-white tracking-wider">
    Shubham_Tohake
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-mono"
            >
              {item.label}
            </a>
          ))}

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-300 hover:text-purple-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-700/40 px-8 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-purple-400 transition-colors text-sm font-mono"
            >
              {item.label}
            </a>
          ))}

          
        </div>
      )}
    </nav>
  )
}
