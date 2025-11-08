"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import About from "@/components/about"
import Contacts from "@/components/contacts"
import Footer from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-mono scroll-smooth">
      <Navigation />
      <main className="relative">
        <div className="mt-[-10px]">
        <Hero />
        </div>
        <Projects />
        <Skills />
        <About />
        <Contacts />
        <Footer />
      </main>
    </div>
  )
}
