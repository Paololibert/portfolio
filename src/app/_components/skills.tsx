"use client";
import { InfiniteMovingImages } from "@/components/ui/infinite-moving-images";

const skills = [
  {
    imageUrl: "/logo/django.png",
  },
  {
    imageUrl: "/logo/laravel.png",
  },
  {
    imageUrl: "/logo/nestjs.png",
  },
  {
    imageUrl: "/logo/react.png",
    description: "I like it with Next.js",
  },
];

const SkillsSection = () => (
  <section id="skills" className="p-3 text-white w-full">
    <h2 className="text-5xl w-full flex justify-center items-center pb-3">
      <span className="font-mono">Skills</span>
    </h2>
    <div className="w-full flex justify-center">
      <InfiniteMovingImages items={skills} direction="right" speed="fast" />
    </div>
  </section>
);

export default SkillsSection;
