import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";

export default function Hero() {
  const myName = "Hi, I'm Paolo, welcome to my Portfolio";

  return (
    <section id="home" className="flex justify-center w-full p-3">
      <div className="flex flex-col w-full items-center sm:items-start text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <TextGenerateEffect words={myName} />
          </h1>
          <p className="font-serif text-2xl text-white max-w-md text-justify">
            I'm a web developer and passionate about the world of technology. I am interested in learning new things.
          </p>
        </div>
        <div className="flex justify-center sm:justify-start space-x-4">
          <Link href="#contact">
            <Button className="text-base font-mono w-26 p-2 bg-[#4f7090] hover:bg-[#243545]" size={"lg"}>
              Contact me
            </Button>
          </Link>
          <Link href="/SINZOGAN-Libert-Paolo-A.pdf" target="_blank">
            <Button className="text-base font-mono w-26 bg-[#4f7090] hover:bg-[#243545]" size={"lg"}>
              My resume
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
