import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";

export default function Hero() {
  const myName = "Hi, I'm Paolo, welcome to my Portfolio";
  
  return (
    <section id="home" className="flex justify-center w-full p-3">
      <div className="flex flex-col w-full">
        <h1>
          <TextGenerateEffect words={myName} />
        </h1>
        <p className="font-serif text-2xl text-white">
          I'm a web developer and passionate about the world of technology. I am interested in learning new things.
        </p>
        <div className="flex space-x-4"> {/* Utilise un conteneur flex pour espacer les boutons */}
          <Link href="#contact">
            <Button className="text-base font-mono w-24 p-2 bg-[#4f7090] hover:bg-[#243545]" size={"lg"}>
              Contact me
            </Button>
          </Link>
          <Link href="/SINZOGAN-Libert-Paolo-A.pdf" target="_blank" >
            <Button className="text-base font-mono w-24   bg-[#4f7090] hover:bg-[#243545]" size={"lg"}>
              My resume
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
