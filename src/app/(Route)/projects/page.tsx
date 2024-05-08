import { templateMetadata } from "@/lib/templateMetadata";
import ProjectList from "./ProjectList";

import { Metadata } from "next";

export const metadata: Metadata = {
  ...templateMetadata,
  title: "Projects",
  description:
    "Hey, Everyone! Here are some of the projects I have worked on in the past.",
  keywords:
    "Projects, Portfolio, Dheeraj Sharma, Web Development, Software Development, Full Stack Development, Wikipedia, GreatNerve, Dherraj Sharma, Engineering, NSUT, Delhi, India, React, Next.js, TailwindCSS, TypeScript, Python, Rust, Git, AWS, Firebase, SQL, NoSQL, MongoDB, PostgreSQL, MySQL, SQLite, Docker, Kubernetes, Linux, Windows, MacOS, Android, iOS, Flutter, Dart, C, C++, Java, JavaScript, TypeScript, HTML, CSS, SCSS, SASS, Web Development, Software Development, Full Stack Development, Competitive Programming, Data Structures, Algorithms, Problem Solving, Open Source, Open Source Contribution, Projects, Portfolio, Blog, Blogging, Technical Blog, Technology, Web Development, Software Development, Full Stack Development, Competitive Programming, Data Structures, Algorithms, Problem Solving, Open Source, Open Source Contribution, Projects, Portfolio, Blog, Blogging, Technical Blog, NSUT IIF, Mars Image",
  openGraph: {
    ...templateMetadata.openGraph,
    title: "Projects",
    description:
      "Hey, Everyone! Here are some of the projects I have worked on in the past.",
  },
  twitter: {
    ...templateMetadata.twitter,
    title: "Projects",
    description:
      "Hey, Everyone! Here are some of the projects I have worked on in the past.",
  },
};

const Project = () => {
  return (
    <div className="flex-1 flex flex-col gap-4 mt-8 justify-center items-center">
      <div className="w-10/12 lg:w-8/12 text-justify space-y-2">
        <h1 className="text-4xl font-bold text-center">Projects</h1>
        <p className="text-lg font-normal text-center">
          Hey Everyone! Here are some of the projects I have worked on in the past and for some of them, I am still working on. I hope that you liked them and find them intresting.
        </p>
      </div>
      <ProjectList />
    </div>
  );
};

export default Project;
