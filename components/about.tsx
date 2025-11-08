"use client"

export default function About() {
  return (
    <section id="about-me" className="py-24 px-6 sm:px-8 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-purple-400">#</span>about-me
            </h2>

            <p className="text-slate-400 text-sm font-mono mb-4">hello, i'm Shubham!</p>

            <p className="text-slate-400 text-sm font-mono mb-6 leading-relaxed">
             I am Shubham Sandhya Sanjay Tohake, a self-taught full stack web developer with expertise in the MERN stack, TailwindCSS, and AI technologies including LangChain RAG and LLMs. I am passionate about building responsive, modern, and user-friendly web applications from scratch, transforming ideas into engaging online experiences.
            </p>

            <p className="text-slate-400 text-sm font-mono mb-8 leading-relaxed">
             Over the past year, I have helped various clients and contributed to open-source projects, leveraging my skills in frontend & backend development, web technologies, design tools, and AI-powered solutions. I constantly strive to stay updated with the latest frameworks and innovations, combining creativity, problem-solving, and technical knowledge to deliver impactful software solutions.
            </p>

            <button className="border border-slate-600 text-slate-400 hover:border-purple-400 hover:text-purple-400 px-6 py-3 transition-all duration-300 font-mono text-sm rounded">
              THAT'S ME
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
            {/* Decorative Dots */}
            <div className="absolute top-6 right-6 sm:top-12 sm:right-12 w-24 sm:w-32 h-24 sm:h-32 opacity-10">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="inline-block w-1.5 h-1.5 bg-purple-400 m-2 rounded-full"></div>
              ))}
            </div>

            <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-transparent rounded-lg border border-slate-700 overflow-hidden shadow-lg">
              {/* YOUR IMAGE HERE */}
              <img
                src="about.jpg"   /* <-- replace with your LXB image path */
                alt="Profile"
                className="w-full h-full object-cover" /* object-cover = fills nicely */
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
