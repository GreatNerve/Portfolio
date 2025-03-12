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

const ABOUT_ME = `I am a Full Stack Developer and Electronics & Communication Engineering student at Netaji Subhas University of Technology, Delhi, specializing in building scalable and efficient web applications. With expertise in React, Node.js, and MongoDB, I have developed and deployed robust solutions that enhance user experience and drive business growth.
Passionate about problem-solving and innovation, I thrive on learning new technologies and continuously refining my skills. I have a strong grasp of data structures and algorithms, making me adept at competitive programming and efficient software development.
Beyond coding, I have hands-on experience in the software development life cycle, from conceptualization to deployment, ensuring high-quality, maintainable solutions. Whether working independently or as part of a team, I excel in collaboration, adaptability, and tackling complex challenges head-on. Always eager to push boundaries, I am committed to building impactful applications that solve real-world problems. 🚀`;

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
          I&apos;m a Full Stack Developer with experience in building web
          applications using modern technologies like React, Node.js, and
          MongoDB.
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
