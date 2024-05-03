import { Logo } from "@/components";
import { Button } from "@nextui-org/button";
import { Link as BtnLink } from "@nextui-org/link";
import Link from "next/link";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
const index: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 container h-[80vh]">
      <Logo size="w-48 h-40" fontSize="text-5xl" />
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
          as={BtnLink}
          className="rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          href="https://www.linkedin.com/in/greatnerve/"
          target="_black"
        >
          Contact
        </Button>
      </div>
    </div>
  );
};

export default index;
