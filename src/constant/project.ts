export interface IProject {
  name: string;
  image: string;
  summary: string;
  description: string;
  techStack: string[];
  status: string;
  live?: string;
  git?: string;
  slug: string;
}

export const PROJECTS_LIST: IProject[] = [
  {
    name: "Tool Snitch",
    image:
      "https://res.cloudinary.com/greatnerve/image/upload/v1741814869/Screenshot_2025-03-13_025448_vwug1i?w=740px",
    summary:
      "Collaborated on a B2C platform connecting users with local electronic repair shops, enhancing user connections by 30%.",
    description:
      "Tool Snitch is a platform designed to bridge the gap between customers and local electronic repair shops. I collaborated on this project, contributing to its multi-role access system for users, partners, and administrators. AWS integration ensures high scalability and robust security.",
    techStack: ["AWS", "Next.js", "Node.js", "MongoDB"],
    status: "Completed",
    live: "https://www.toolsnitch.com/",
    slug: "tool-snitch",
  },
  {
    name: "AnitBot",
    image:
      "https://res.cloudinary.com/greatnerve/image/upload/v1741815312/anitbot",
    summary:
      "WhatsApp bot designed to reduce spam in NSUT groups, achieving a 99% spam reduction.",
    description:
      "AnitBot is a WhatsApp bot built using Node.js, Redis, and Socket.IO, deployed on Azure VM. It automatically detects and removes spam messages while banning offenders from the groups, significantly improving group moderation efficiency.",
    techStack: ["Node.js", "Redis", "Socket.IO", "Azure VM"],
    status: "Ongoing",
    slug: "anitbot",
  },
  {
    name: "NSUT IIF Website",
    image:
      "https://res.cloudinary.com/greatnerve/image/upload/v1714813549/Projects/NSUT-IIF-Website?w=740px",
    summary:
      "Built the official website for NSUT IIF, integrating modern frontend and backend technologies to support multi-role access and efficient data flow.",
    description:
      "Built a responsive platform for NSUT IIF with Google OAuth, permission-based access, and server-side caching. Focused on performance, usability, and maintaining a smooth experience across user roles. The site presents the foundation's work while quietly handling the heavy lifting behind the scenes.",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    status: "Completed",
    live: "https://nsutiif.in/",
    slug: "nsut-iif-website",
  },
  {
    name: "AI for Humanity Delhi",
    image:
      "https://res.cloudinary.com/greatnerve/image/upload/v1750890663/Projects/ai4humanity_nsut_banner?w=740px",
    summary:
      "Built and deployed a submission portal for 100+ teams as part of a GenAI-focused event in collaboration with the Embassy of Israel.",
    description:
      "AI for Humanity Delhi was a campus-wide initiative exploring the responsible use of generative AI. I built and deployed the submission platform under NSUT IIF, enabling over 100 teams to participate. The event was organized in collaboration with the Embassy of Israel, bringing together students, ideas, and important questions worth exploring.",
    techStack: ["Next.js", "MongoDB", "Tailwind CSS"],
    status: "Completed",
    live: "https://ai-summit-nsut.netlify.app/",
    slug: "ai-for-humanity",
  },
  {
    name: "Wikipedia Summary",
    image:
      "https://res.cloudinary.com/greatnerve/image/upload/v1714813548/Projects/Wikipedia-Summary?w=740px",
    summary:
      "Built a Wikipedia-like platform for exploring topics with summaries, search suggestions & responsive design.",
    description:
      "This jQuery-based platform provides concise article summaries and search suggestions using the Wikipedia API. It ensures a smooth user experience with an intuitive, fully responsive design.",
    techStack: ["jQuery", "HTML", "CSS", "Bootstrap"],
    status: "Completed",
    live: "https://www.wikipedia.greatnerve.com/",
    git: "https://github.com/GreatNerve/Wikipedia",
    slug: "wikipedia-clone",
  },
  {
    name: "Mars Image Search",
    live: "https://greatnerve.github.io/Mars_Image/",
    image:
      "https://res.cloudinary.com/greatnerve/image/upload/v1714813550/Projects/Mars-Image-Search",
    summary:
      "Built a Mars image search platform with a responsive design, image grid, and image modal.",
    description:
      "Developed a Mars image search platform leveraging NASA’s API, featuring an image grid and modal for seamless browsing. The responsive design ensures accessibility across all devices.",
    techStack: ["jQuery", "HTML", "CSS", "Bootstrap"],
    status: "Completed",
    git: "https://github.com/GreatNerve/Mars_Image",
    slug: "mars-image-search",
  },
  {
    name: "Robotics & Electronics",
    git: "https://github.com/GreatNerve/Nerve_V1",
    image:
      "https://res.cloudinary.com/greatnerve/image/upload/v1741815127/Nerve_bbzntu",
    summary:
      "Built multiple Robotics and Electronics projects, including IoT, Embedded Systems, and Automation.",
    description:
      "Worked on various Robotics and Electronics projects, covering IoT, Embedded Systems, and Automation. These projects highlight expertise in hardware and software integration for real-world applications.",
    techStack: ["Arduino", "Raspberry Pi", "IoT", "Embedded Systems"],
    status: "Completed",
    slug: "robotics-electronics",
  },
];
