import { Reveal } from "@/components/reveal"

const skills = [
  "MS Dynamics 365",
  "AL",
  "C#",
  "Python",
  "Kotlin",
  "Java",
  "JavaScript",
  "SQL",
  "PL/SQL",
  "HTML",
  "CSS",
  "TypeScript",
  "Node.js",
  "Next.js",
  "React",
  "Git",
  "Docker",
  "Unity",
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div>
            <p className="mb-3 font-mono text-sm text-cyan-400">// about</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50">
              From New Zealand to Catalonia
            </h2>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-slate-400">
              <p>
                My path runs{" "}
                <span className="text-slate-200">
                  New Zealand → United Kingdom → Spain
                </span>
                . Moving across borders and exposure to new international environments, 
                constantly pushed out of my comfort zone. It gave me maturity, resilience, 
                and the ability to adapt quickly. That drive led me to master Catalan and 
                complete my Multiplatform Application Development (DAM) degree entirely 
                in a second language.
              </p>
              <p>
                I began in{" "}
                <span className="text-emerald-400">Music Composition</span> —
                writing complex pieces bound by strict counterpoint, voice leading, 
                and structural rules. Balancing multiple independent musical lines 
                so they work together as a single system requires the exact same 
                discipline and logic I use today to architect clean code.
              </p>
              <p>
                I enjoy developing across different platforms, moving between
                enterprise business systems, web applications, and creative 
                interactive software.

                Today I build across platforms, comfortable moving between
                enterprise business systems (Dynamics 365), web applications, and creative
                interactive work.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-8">
            <p className="mb-6 font-mono text-sm text-cyan-400">
              // technical arsenal
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-slate-300 transition-colors hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
