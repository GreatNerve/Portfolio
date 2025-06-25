"use client";
import SkillCard, { Skill } from "../Card/SkillCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills: Skill[] = [
  {
    name: "React",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next.js",
    image: "https://www.svgrepo.com/show/368858/nextjs.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
  },
  {
    name: "Python",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",
  },
  {
    name: "Node.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "FastAPI",
    image: "https://avatars.githubusercontent.com/u/156354296?s=200&v=4",
  },
  {
    name: "Express JS",
    image:
      "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
  },
  {
    name: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
  },
  {
    name: "PostgreSQL",
    image:
      "https://www.onetrust.com/content/dam/onetrust/brand/content/graphic/thumbnail/integrations/OT-integrations-logo-postgre-sql.png",
  },
  {
    name : "Prisma",
    image: "https://cdn-1.webcatalog.io/catalog/prisma-data-platform/prisma-data-platform-icon-filled-256.webp?v=1714776724281",
  },
  {
    name: "Docker",
    image:
      "https://www.vikingsoftware.com/wp-content/uploads/2024/02/Docker.png",
  },
  {
    name: "Arduino",
    image:
      "https://scontent.fdel11-2.fna.fbcdn.net/v/t39.30808-6/352406443_628415492291544_3438294638463442429_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WG4bl6HrSC8Q7kNvgGlX8KH&_nc_oc=AdiZ3AqrNiK-8CfLi9nxp5Hju12Vhh20cQiNr1igOcAyJ7d6swq6voGzZCRv0pYYeGbZvPm1xCZ8_sTPDMd-Goth&_nc_zt=23&_nc_ht=scontent.fdel11-2.fna&_nc_gid=AyeqMS8BES4YYBg9Ub0IGkO&oh=00_AYFvWkYi3toFiPywwThLoFyTErt3o88z8k2c9bs4xypmvA&oe=67D7EE3A",
  },
];

export default function SkillList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="flex-1 flex flex-wrap gap-4 justify-center items-center my-4"
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {skills.map((skill, index) => (
        <motion.div key={index} variants={item}>
          <SkillCard {...skill} />
        </motion.div>
      ))}
    </motion.div>
  );
}
