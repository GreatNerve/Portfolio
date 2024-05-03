import { Logo } from "@/components";
import Link from "next/link";
import { FC } from "react";
import { BiSolidPhone } from "react-icons/bi";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Footer: FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-border border-t-2">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center sm:justify-start">
              <Link href="/">
                <Logo size="h-16 w-24" className="block m-0 text-md" />
              </Link>
            </div>

            <div className="flex justify-center sm:justify-start">
              <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left dark:text-gray-400">
                Dedicated to provide best services. We are a team of talented
                individuals who are passionate about what we do.
              </p>
            </div>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <a
                  href="https://in.linkedin.com/in/greatnerve"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-500 dark:hover:text-gray-500/75 text-2xl"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedinIn />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/GreatNerve"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-500 dark:hover:text-gray-500/75 text-2xl"
                >
                  <span className="sr-only">GitHub</span>
                  <FaGithub />
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/greatnerve"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-500 dark:hover:text-gray-500/75 text-2xl"
                >
                  <span className="sr-only">Twitter</span>
                  <FaTwitter />
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/greatnerve"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-500 dark:hover:text-gray-500/75 text-2xl"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                About Us
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    History
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Our Team
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Our Journey
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                Our Services
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Web Development
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    App Development
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Marketing
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Google Ads
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                Helpful Links
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Support
                  </a>
                </li>

                {/* <li>
                  <a
                    className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <span className="text-gray-700 transition group-hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">
                      Live Chat
                    </span>

                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-gray-500"></span>
                    </span>
                  </a>
                </li> */}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                Contact Us
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="mailto:support@greatnerve.com"
                  >
                    <span className="text-2xl">
                      <HiOutlineMail />
                    </span>
                    <span className="flex-1 text-gray-700 dark:text-gray-300">
                      support@greatnerve.com
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <span className="text-2xl">
                      <BiSolidPhone />
                    </span>

                    <span className="flex-1 text-gray-700 dark:text-gray-300">
                      +91 87XXXXXXXX
                    </span>
                  </a>
                </li>

                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <span className="text-2xl">
                    <FaLocationDot />
                  </span>

                  <address className="-mt-0.5 flex-1 not-italic text-gray-700 dark:text-gray-300">
                    NSUT, Dwarka, New Delhi, India
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="block sm:inline">All rights reserved.</span>

              <a
                className="mx-1 inline-block text-gray-600 underline transition hover:text-gray-600/75 dark:text-gray-400 dark:hover:text-gray-400/75"
                href="#"
              >
                Terms & Conditions
              </a>

              <span className="mx-1 ">&middot;</span>

              <a
                className="inline-block text-gray-600 underline transition hover:text-gray-600/75 dark:text-gray-400 dark:hover:text-gray-400/75"
                href="#"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 dark:text-gray-400">
              &copy; 2024 GreatNerve
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
