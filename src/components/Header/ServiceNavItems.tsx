import { ListItem } from "@/components";
import {
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";


import Link from "next/link";

import { useAppSelector } from '@/lib/hooks';

import { serviceType } from "@/store/ServiceSlice";
import { LegacyRef } from "react";


import { Logo } from "@/components";

const ServiceNavItems = forwardRef(function ProjectNavItems({ name }: { name: string }, ref) {
    
const service = useAppSelector((state) => state.service.data);

  return (
    <>
    <NavigationMenuTrigger
        className="w-full text-lg md:text-base font-medium"
        ref={ref as LegacyRef<HTMLButtonElement> | undefined}
    >
        Services
    </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ScrollArea className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px]">
          <ul className="grid gap-x-4 gap-y-4 p-6 lg:grid-cols-[.75fr_1fr]  gap-3  md:grid-cols-2 max-h-[80vh]">
            <li className="row-span-2">
              <Link
                className={cn(
                  "flex flex-col p-6 py-4 rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md h-full w-full"
                )}
                href="/service"
              >
                <Logo className="size-full max-h-16" />
                <div className="mb-1 mt-4 text-lg font-medium">
                  {name || "Services"}
                </div>
                <p className="text-sm leading-tight text-muted-foreground line-clamp-[8]">
                  We provide quality services that are fast, secure, and
                  scalable to help you grow your business. Our team build
                  projects while keeping the user experience and feasibility in
                  mind.
                </p>
              </Link>
            </li>

            {service &&
                service.map((component:serviceType) => (
                    <ListItem
                        key={`Service-${component.title}`}
                        title={component.title}
                        to={component.to}
                    >
                        {component.description}
                    </ListItem>
                ))}
          </ul>
        </ScrollArea>
      </NavigationMenuContent>
    </>
  );
});


export default ServiceNavItems;