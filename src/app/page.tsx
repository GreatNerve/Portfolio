import { Logo, SkillList } from "@/components";
import ProjectGrid from "@/components/Includes/HomeProjectGrid";
import TypingEffect from "@/components/Includes/TextEffect";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";
import BeatingEffect from "@/components/Includes/BeatingEffect";

const titleText = [
  {
    text: "Hi👋,",
  },
  {
    text: "I'm",
  },
  {
    text: "Dheeraj ",
    className: "text-indigo-500 dark:text-indigo-500",
  },
  {
    text: "Sharma",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const ABOUT_ME = `Hello! I’m Dheeraj Sharma, a third-year Electronics and Communication Engineering student at Netaji Subhas University of Technology (NSUT).
I currently serve as the Head of Technical Affairs at IEEE NSUT, Tech Co-Head at NSUT IIF, and Web Development Mentor with Google Developer Student Clubs. These roles have given me space to guide, build, and occasionally keep me from falling apart.
Over time, I’ve grown more drawn to the quieter things — where progress is slow, answers are unclear, and most of it feels unfinished.
Still here. Still trying. Still not sure what it all means.`;

export default function Home() {
  return (
    <>
      <section className="container flex gap-2 flex-col items-center justify-center flex-1  min-h-[calc(100vh-4rem-1px)] overflow-hidden relative">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fillClass=" fill-indigo-700/70 dark:fill-indigo-700/90"
        />
        <BeatingEffect>
          <Logo className="w-48 h-40" />
        </BeatingEffect>
        <h1 className="text-4xl font-bold text-center">
          <TypingEffect word={titleText} duration={1000} />
        </h1>
        <h2 className="text-lg text-center max-w-[600px] antialiased">
         I make things. Sometimes they work, sometimes they don&lsquo;t. I keep going anyway, hoping it adds up to something.
        </h2>
        <div className="flex gap-2 text-4xl">
          <a
            href="https://github.com/greatnerve"
            target="_black"
            className="rounded-full m-3 text-foreground/90 hover:text-foreground transition-all duration-300 ease-in-out"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/greatnerve/"
            target="_black"
            className="rounded-full m-3 text-foreground/90 hover:text-foreground transition-all duration-300 ease-in-out"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/greatnerve/"
            target="_black"
            className="rounded-full m-3 text-foreground/90 hover:text-foreground transition-all duration-300 ease-in-out"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="flex gap-4">
          <Button
            as={Link}
            className="rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
            href="/projects"
          >
            Projects
          </Button>
          <Button
            as={Link}
            className="rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
            href="/contact"
          >
            Contact
          </Button>
        </div>
      </section>
      <section className="container flex flex-col px-8 my-16 md:px-20 gap-4">
        <h1 className="text-4xl font-bold underline underline-offset-8 decoration-wavy decoration-4 decoration-indigo-600 ">
          About Me
        </h1>
        <div className="text-justify text-sm md:text-base lg:text-lg min-h-[300px] md:min-h-[200px]">
          <TypingEffect text={ABOUT_ME} duration={1000} typingMode="chunk" />
        </div>
      </section>
      <section className="container flex flex-col justify-center items-center px-8 my-16 md:px-20 gap-4">
        <h1 className="text-4xl font-bold text-center">Skills</h1>
        <SkillList />
      </section>
      <section className="container flex flex-col justify-center items-center px-8 my-16 md:px-20 gap-4 space-y-4 ">
        <h1 className="text-4xl font-bold text-center">Projects</h1>
        <ProjectGrid />
      </section>{" "}
    </>
  );
}
