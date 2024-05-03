
import { ListItem } from "@/components";
import {
    NavigationMenuContent,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

import { useAppSelector } from '@/lib/hooks';
import { LegacyRef } from "react";

const ProjectNavItems = forwardRef(function ProjectNavItems({ name }:{name : string}, ref) {

const components = useAppSelector((state) => state.project.data);

  return (
    <>

    <NavigationMenuTrigger
        className={cn("w-full text-lg md:text-base font-medium")}
        ref={ref as LegacyRef<HTMLButtonElement> | undefined}
    >
        {name || "Projects"}
    </NavigationMenuTrigger>
    <NavigationMenuContent className="">
        <ScrollArea className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] pb-4 ">
            <ul className="grid  gap-3 p-4   md:grid-cols-2 h-full w-full  max-h-[80vh] ">
                {components &&
                    components.map((component: any) => (
                        <ListItem
                            key={`NavItem-${component.slug}-${component.name}`}
                            title={component.name}
                            to={`/projects#${component.slug}`}
                        >
                            {component?.summary ? component?.summary : component?.description}
                        </ListItem>
                    ))}
            </ul>
        </ScrollArea>
    </NavigationMenuContent>
    </>
  );
});

export default ProjectNavItems;