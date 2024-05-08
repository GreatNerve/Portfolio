import { Logo, SkillCard, SkillList } from "@/components";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Home() {
  return (
    <>
    <section className="container flex gap-2 flex-col items-center justify-center flex-1  min-h-[calc(100vh-4rem-1px)]">
      <div>
        <Logo className="w-48 h-40" />
      </div>
      <h1 className="text-4xl font-bold text-center">
        Hi👋, I&lsquo;m <span className="text-indigo-600">Dheeraj Sharma</span>
      </h1>
      <h2 className="text-lg text-center max-w-[600px]">
        I&apos;m a Full Stack Developer with experience in building web
        applications using modern technologies like React, Node.js, and MongoDB.
      </h2>
      <div className="flex gap-2 text-4xl">
        <a
          href="https://github.com/greatnerve"
          target="_black"
          className="rounded-full m-3"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/greatnerve/"
          target="_black"
          className="rounded-full m-3"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/greatnerve/"
          target="_black"
          className="rounded-full m-3"
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
      <h1 className="text-4xl font-bold underline underline-offset-8 decoration-wavy decoration-4 decoration-indigo-600 ">About Me</h1>
      <p className="text-lg text-justify ">
        I am a student at Netaji Subhas University of Technology, Delhi pursuing Electronic and Communication Engineering. I am a Full Stack Developer with experience in building web applications using modern technologies like React, Node.js, and MongoDB. I am passionate about building scalable and efficient web applications that can help businesses grow. I am always eager to learn new technologies and improve my skills. I am a quick learner and a team player who can work well in a team as well as independently. I am always ready to take on new challenges and solve complex problems. I am also a competitive programmer and have a good understanding of data structures and algorithms. I have a good understanding of software development life cycle and have experience in working on projects from scratch to deployment. I am always ready to take on new challenges and solve complex problems. <Link href="/about" className="text-indigo-600 underline underline-4 underline-offset-4	underline-indigo-600 dark:text-indigo-400 dark:underline-indigo-400 hover:underline-indigo-700 hover:text-indigo-800 dark:hover:text-indigo-800">Learn more.</Link>
      </p>
      </section>

      <section className="container flex flex-col justify-center items-center px-8 my-16 md:px-20 gap-4">
      <h1 className="text-4xl font-bold text-center">Skills</h1>
      <SkillList />
      </section>

    </>
  );
}
