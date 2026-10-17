import { Navbar } from "@/components/navbar";
import {Hero} from "@/components/hero";
import {About} from "@/components/about";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}