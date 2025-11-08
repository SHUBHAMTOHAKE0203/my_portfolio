"use client"

export default function Contact() {
  return (
    <section className="py-20 px-4 border-t border-purple-600">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">
          <span className="text-purple-400">$</span> Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="border-l-2 border-purple-600 pl-4">
              <p className="text-slate-500 text-sm font-mono">Email</p>
              <a
                href="mailto:hello@elias-dev.ml"
                className="text-purple-400 hover:text-purple-300 transition-colors font-mono text-lg"
              >
                hello@elias-dev.ml
              </a>
            </div>
            <div className="border-l-2 border-purple-600 pl-4">
              <p className="text-slate-500 text-sm font-mono">Discord</p>
              <p className="text-white font-mono">!Elias#3519</p>
            </div>
            <div className="border-l-2 border-purple-600 pl-4">
              <p className="text-slate-500 text-sm font-mono">Social</p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border border-purple-600 bg-slate-900 bg-opacity-40 p-6 rounded-lg">
            <form className="space-y-4">
              <div>
                <label className="text-purple-400 text-sm font-mono block mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder=">"
                  className="w-full bg-slate-800 border border-purple-600 text-white px-4 py-2 rounded focus:outline-none focus:border-purple-400 transition-colors font-mono"
                />
              </div>
              <div>
                <label className="text-purple-400 text-sm font-mono block mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder=">"
                  className="w-full bg-slate-800 border border-purple-600 text-white px-4 py-2 rounded focus:outline-none focus:border-purple-400 transition-colors font-mono"
                />
              </div>
              <div>
                <label className="text-purple-400 text-sm font-mono block mb-2">Message</label>
                <textarea
                  placeholder=">"
                  rows={4}
                  className="w-full bg-slate-800 border border-purple-600 text-white px-4 py-2 rounded focus:outline-none focus:border-purple-400 transition-colors font-mono resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-500 text-white font-mono py-2 rounded transition-colors mt-6"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-purple-600 text-center">
          <p className="text-slate-500 font-mono text-sm">
            © 2025 Elias. Built with <span className="text-purple-400">React</span> &{" "}
            <span className="text-purple-400">Next.js</span>
          </p>
        </div>
      </div>
    </section>
  )
}
