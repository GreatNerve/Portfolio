import { LinkWrapper, SuspenseImage } from "..";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const ItemCard = ({
  name,
  description,
  image,
  techStack,
  git,
  live,
  status,
  slug,
}: {
  name: string
  description: string
  image: string
  techStack: string[]
  git? : string
  live? : string
  status? : string
  slug? : string
}) => {
  return (
    <Card
      id={slug}
      className="flex flex-col lg:flex-row gap-1 lg:gap-4 p-4 lg:p-6 items-start lg:items-center lg:justify-center justify-start  hover:shadow-card-foreground  transition-all duration-300 ease-in-out bg-gray-100/70 dark:bg-black/20 hover:scale-[1.01] hover:bg-gray-100/50 dark:hover:bg-black/0"
    >
     
      <LinkWrapper
        href={live || git}
        className="w-full h-auto aspect-video lg:w-96 flex justify-center items-center"
        target="_blank"
      >
        <SuspenseImage
          src={image}
          alt={name}
          size="w-full h-auto aspect-video lg:w-96"
          className="mx-2 rounded-md flex justify-center items-center"
        />

      </LinkWrapper>
      <div className="flex-1 w-full flex flex-col">
        <CardHeader>
        <CardTitle className="text-3xl mt-4 font-bold mb-2 lg:my-0 antialiased">{name}</CardTitle>
        <CardDescription className="text-justify font-normal text-base text-card-foreground antialiased">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pb-1">
        <p>
          Status{" : "}
          <span className=" font-semibold">{status}</span>
        </p>
        </CardContent>
        <div className="flex-1 w-full flex flex-wrap">
          {techStack && techStack.length > 0 && (
            <CardContent className="flex items-center my-1 flex-wrap pb-2">
              <p className="break-words my-1">Tech Stack{" : "}</p>
              <div className="ms-1 my-1 flex gap-2 flex-wrap">
                {techStack?.map((tech, index) => (
                  <span
                    key={`TechStack-${name?.replace(" ", "-")}-${tech?.replace(
                      " ",
                      "-"
                    )}-${index}`}
                    className=" whitespace-nowrap rounded-full py-1 px-3 bg-indigo-900/80 text-white"
                  >
                    {" "}
                    {tech}{" "}
                  </span>
                ))}
              </div>
            </CardContent>
          )}
          <CardFooter className="p-0 w-full justify-center flex-1 me-0 lg:me-12 flex lg:justify-end flex-col text-center md:flex-row lg:ms-auto">
            {git && (
              <a
                href={git}
                className="w-full lg:w-auto bg-indigo-600 hover:bg-indigo-700 p-3 m-2 rounded-md text-white "
                target="_blank"
              >
                View Code
              </a>
            )}
            {live && (
              <a
                href={live}
                className="w-full lg:w-auto bg-indigo-600 hover:bg-indigo-700 p-3 m-2 rounded-md text-white "
                target="_blank"
              >
                View Project
              </a>
            )}
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default ItemCard;
