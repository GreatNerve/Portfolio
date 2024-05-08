import SkillCard, { Skill } from "../Card/SkillCard";
 
const skills: Skill[] = [{
    name: "React",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
}, {
    name: "Next.js",
    image: "https://www.svgrepo.com/show/368858/nextjs.svg",
}, {
    name: "JavaScript",
    image : "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
}, {
    name: "Python",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",
}, {
    name: "Node.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
}, {
    name: "Tailwind CSS",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
}];


export default function SkillList() {

    return (
        <div className="flex-1 flex flex-wrap gap-4 justify-center items-center my-4">
                {skills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
        </div>
    );
}