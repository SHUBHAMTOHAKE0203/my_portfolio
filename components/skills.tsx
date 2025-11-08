"use client"

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Java (DSA)", "C++" , "C" ,"Python"],
    },
    {
      category: "Web Technologies",
      items: [
        "HTML", "CSS",
        "TailwindCSS", "Bootstrap",
        "JavaScript", "MERN Stack","API & Many"
      ],
    },
     {
      category: "AI / Machine Learning",
      items: [
        "LLMs (Large Language Models)",
        "LangChain",
        "RAG (Retrieval-Augmented Generation)",
       
      ],
    },
    {
      category: "Design Tools",
      items: ["Figma"],
    },
    {
      category: "Soft Skills",
      items: [
        "Communication", "Teamwork", "Leadership",
        "Critical Thinking", "Problem Solving",
        "Time Management", "Emotional Intelligence"
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 px-6 md:px-12 border-t border-slate-700/50 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          <span className="text-purple-400">#</span>skills
        </h2>

        <div className="space-y-12">
          {skills.map((skillGroup, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg text-purple-300 font-mono border-l-4 border-purple-400 pl-3">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:border-purple-400 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
