import Link from "next/link";
import { FC } from "react";
import { Metadata } from "next";
import { templateMetadata } from "@/lib/templateMetadata";

export const metadata: Metadata = {
  ...templateMetadata,
  title: {
    absolute: "404 | Not Found",
  },  
  description: "The page you requested could not be found or we are working on it.",
  openGraph: {
    ...templateMetadata.openGraph,
    title: {
      absolute: "404 | Not Found",
    },
    description: "The page you requested could not be found or we are working on it.",
  },
  twitter: {
    ...templateMetadata.twitter,
    title: {
      absolute: "404 | Not Found",
    },
    description: "The page you requested could not be found or we are working on it.",
  },
};

const Error404: FC = () => {
  return (
    <div className="grid h-[90vh] place-content-center bg-background px-4 ">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200 dark:text-gray-700">
          404
        </h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          We can&apos;t find that page.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
