import ProjectList from "./ProjectList";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Hey, Everyone! Here are some of the projects I have worked on in the past.",
  keywords: "Projects, Portfolio, Dheeraj Sharma, Web Development, Software Development, Full Stack Development",
};


const Project = () => {
  
  return (
    <>
      <h1 className="text-4xl font-bold text-center ">
        Projects 
      </h1>
      <ProjectList />
    </>
  );
}

export default Project