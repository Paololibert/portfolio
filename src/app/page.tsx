'use client'
import Contact from "./_components/contact";
import Hero from "./_components/hero";
import Project from "./_components/project";
import SkillsSection from "./_components/skills";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full pt-16">
      <Hero />
      <Project />
      <SkillsSection />
      <Contact />
    </main>
  );
}
