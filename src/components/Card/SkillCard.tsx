import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardTitle } from "../ui/card";

export interface Skill {
    name: string;
    image: string;
}

export default function SkillCard({
  name,
  image,
}: Skill) {
  return (
    <Card className="size-40 cursor-pointer hover:bg-indigo-600/5 hover:shadow-card-foreground  transition-shadow duration-300 ease-in-out">
      <CardHeader className="py-auto flex flex-col justify-center items-center gap-2">
        <Image
          src={image}
          classNames={{
            img: "aspect-square select-none object-center	",
            wrapper:
              "aspect-square",
          }}
          height={64}
          width={64}
          radius="full"
          alt={name}
        />
        <CardTitle className="text-lg font-bold">{name}</CardTitle>
      </CardHeader>
    </Card>
  );
}
