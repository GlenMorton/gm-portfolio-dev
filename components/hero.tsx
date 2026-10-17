"use client"

import { motion } from "motion/react"
import { ArrowRight, Download, MapPin } from "lucide-react"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-24 pt-40 md:pt-48"
    >
      {/* ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
      />

      <motion.div
        className="relative mx-auto max-w-3xl text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300"
        >
          <MapPin className="h-3.5 w-3.5 text-emerald-400" />
          Based in Catalonia · Kiwi roots
        </motion.span>

        <motion.h1
          variants={item}
          className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            Glen Robert Morton.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-slate-300"
        >
          A multiplatform developer blending technical logic with creative
          execution, shaped by Kiwi roots and based in Catalonia.
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-slate-400"
        >
          Bachelor of Music (Composition) from the University of Otago. Now
          a DAM graduate building on Microsoft Dynamics 365 Business
          Central, the web and Android.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/glen-morton-cv.pdf"
            download="Glen-Morton-CV.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-emerald-400/50 hover:text-emerald-400"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
