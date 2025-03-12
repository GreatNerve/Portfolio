import Link from "next/link";
import { FC } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";

const SocialLinks = [
  {
    text: "Mail",
    icon: <FaEnvelope />,
    link: "mailto:support@greatnerve.com",
  },
  {
    text: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/GreatNerve",
  },
  {
    text: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/greatnerve/",
  },
  {
    text: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/greatnerve/",
  },
  {
    text: "Twitter",
    icon: <FaXTwitter />,
    link: "https://x.com/GreatNerve",
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto px-4 lg:px-8 py-8 flex justify-center sm:justify-between flex-wrap gap-8">
        <div className="flex justify-center">
          <p>
            &copy; {new Date().getFullYear()} GreatNerve. All rights reserved.
          </p>
        </div>

        <ul className="flex justify-center gap-6 md:gap-8 flex-wrap">
          {SocialLinks.map((social, index) => (
            <li key={index}>
              <Link
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {React.createElement(social.icon.type, { className: "size-8" })}
                <span className="sr-only">{social.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
