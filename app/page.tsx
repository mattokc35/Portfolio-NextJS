import About from "@/components/about";
import Intro from "../components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Skills />
    </main>
  );
}
