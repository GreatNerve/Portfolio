import { LinkWrapper, SuspenseImage } from "..";
const Card = ({
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
    <div
      id={slug}
      className="shadow-sm shadow-border border-2 border-border items-start lg:items-center rounded-md gap-1 lg:gap-4 p-4 lg:p-6 bg-secondary flex flex-col lg:flex-row max-w-full lg:w-full lg:max-w-full lg:justify-center justify-start"
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
      <div >
        <h2 className="text-3xl mt-4 font-bold mb-2 lg:my-0">{name}</h2>
        <p className="text-justify">{description}</p>
        <p className="my-1">
          Status{" : "}
          <span className=" font-semibold">{status}</span>
        </p>
        <div className="w-full lg:flex lg:flex-wrap">
          {techStack && techStack.length > 0 && (
            <div className="flex items-center my-1 flex-wrap">
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
            </div>
          )}
          <div className="me-0 lg:me-12 flex lg:justify-end flex-col text-center sm:flex-row lg:ms-auto">
            {git && (
              <a
                href={git}
                className="w-full lg:w-auto bg-indigo-500 p-3 m-2 rounded-md text-white "
                target="_blank"
              >
                View Code
              </a>
            )}
            {live && (
              <a
                href={live}
                className="w-full lg:w-auto bg-indigo-500 p-3 m-2 rounded-md text-white "
                target="_blank"
              >
                View Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
