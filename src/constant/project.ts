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
    image: "https://res.cloudinary.com/greatnerve/image/upload/v1741814869/Screenshot_2025-03-13_025448_vwug1i.png?w=740px",
    summary:
      "Collaborated on a B2C platform connecting users with local electronic repair shops, enhancing user connections by 30%.",
    description:
      "Tool Snitch is a platform designed to bridge the gap between customers and local electronic repair shops. I collaborated on this project, contributing to its multi-role access system for users, partners, and administrators. AWS integration ensures high scalability and robust security.",
    techStack: ["AWS", "Next.js", "Node.js", "MongoDB"],
    status: "Ongoing",
    live: "https://www.toolsnitch.com/",
    slug: "tool-snitch",
  },
  {
    name: "AnitBot",
    image: "https://res.cloudinary.com/greatnerve/image/upload/v1741815312/anitbot.webp",
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
    image: "https://res.cloudinary.com/greatnerve/image/upload/v1714813549/Projects/NSUT-IIF-Website.png?w=740px",
    summary:
      "Collaborated on a website for NSUT IIF integrating frontend and backend technologies like Node.js, Express, and MongoDB.",
    description:
      "As a collaborator on the NSUT IIF website, I contributed to building a responsive platform with Google OAuth integration, multi-level user roles, and optimized performance. The platform effectively showcases the institute's offerings with smooth server-side operations and efficient data management.",
    techStack: ["Node.js", "Express", "MongoDB", "AWS"],
    status: "Ongoing",
    live: "https://nsutiif.in/",
    slug: "nsut-iif-website",
  },
  {
    name: "Food Ordering Website",
    image: "https://res.cloudinary.com/greatnerve/image/upload/v1741815162/foodyfood2_cqebe9.png",
    summary:
      "Developed a modern food ordering website with a user-friendly interface and SSR for optimized performance.",
    description:
      "Built a visually engaging food ordering platform using Next.js and Tailwind CSS. The website supports server-side rendering (SSR) for better performance and responsiveness across devices.",
    techStack: ["Next.js", "Tailwind CSS", "React"],
    status: "Ongoing",
    live: "https://foodyfoods.netlify.app/",
    git: "https://github.com/GreatNerve/Foody",
    slug: "food-website",
  },
  {
    name: "Wikipedia Summary",
    image: "https://res.cloudinary.com/greatnerve/image/upload/v1714813548/Projects/Wikipedia-Summary.png?w=740px",
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
    image: "https://res.cloudinary.com/greatnerve/image/upload/v1714813550/Projects/Mars-Image-Search.png",
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
      "https://res.cloudinary.com/greatnerve/image/upload/v1741815127/Nerve_bbzntu.jpg",
    summary:
      "Built multiple Robotics and Electronics projects, including IoT, Embedded Systems, and Automation.",
    description:
      "Worked on various Robotics and Electronics projects, covering IoT, Embedded Systems, and Automation. These projects highlight expertise in hardware and software integration for real-world applications.",
    techStack: ["Arduino", "Raspberry Pi", "IoT", "Embedded Systems"],
    status: "Completed",
    slug: "robotics-electronics",
  },
];

