import { templateMetadata } from "@/lib/templateMetadata";
import { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import SideImage from "./SideImage";

export const metadata: Metadata = {
  ...templateMetadata,
  title: "Contact",
  description: "Contact me for any queries or collaborations.",
  keywords:
    "Contact, Dheeraj Sharma, Web Development, Software Development, Full Stack Development, GreatNerve, Dheeraj Sharma, Engineering, NSUT, Delhi, India, React, Next.js, TailwindCSS, TypeScript, Python, Rust, Git, AWS, Firebase, SQL, NoSQL, MongoDB, PostgreSQL, MySQL, SQLite, Docker, Kubernetes, Linux, Windows, MacOS, Android, iOS, Flutter, Dart, C, C++, Java, JavaScript, TypeScript, HTML, CSS, SCSS, SASS, Web Development, Software Development, Full Stack Development, Competitive Programming, Data Structures, Algorithms, Problem Solving, Open Source, Open Source Contribution, Projects, Portfolio, Blog, Blogging, Technical Blog, Technology, Web Development, Software Development, Full Stack Development, Competitive Programming, Data Structures, Algorithms, Problem Solving, Open Source, Open Source Contribution, Projects, Portfolio, Blog, Blogging, Technical Blog",
    alternates: {
      canonical: "/contact",
    },
  openGraph: {
    ...templateMetadata.openGraph,
    title: "Contact",
    description: "Contact me for any queries or collaborations.",
  },
  twitter: {
    ...templateMetadata.twitter,
    title: "Contact",
    description: "Contact me for any queries or collaborations.",
  },
};

export default function Contact() {
  const src =
    "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg";
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  flex-1 border-2 border-r justify-center items-center">
      <div className="h-full w-full relative hidden bg-muted lg:block overflow-hidden">
        <SideImage src={src} />
      </div>
      <div className="gap-4 w-full h-full py-8 flex flex-col items-center justify-center">
          <h1 className="text-center text-3xl font-bold">Contact</h1>
            <ContactForm className="w-10/12 md:w-8/12 xl:5/12" />
      </div>
    </div>
  );
}
