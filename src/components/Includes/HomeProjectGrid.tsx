"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaGithub, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

export const Card = React.memo(
    ({
        project,
        index,
        hovered,
        setHovered,
    }: {
        project: IProject;
        index: number;
        hovered: number | null;
        setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden aspect-video w-full transition-all duration-300 ease-out",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
            )}
        >
            <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover absolute inset-0"
                unoptimized
            />
            <div
                className={cn(
                    "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
                    hovered === index ? "opacity-100" : "opacity-0"
                )}
            >
                <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                    <h3>{project.name}</h3>
                    <p className="text-base md:text-lg">{project.summary}</p>
                    <div className="flex gap-4 mt-4">
                        {project.live && (
                            <Link
                                href={project.live}
                                target="_blank"
                                className="rounded-full px-4 py-1 flex justify-center items-center bg-background/90 hover:bg-background/80  text-foreground transition-all duration-300 ease-in-out text-sm"
                                aria-label="Deploment Link"
                                rel="noreferrer noopener"
                            >
                                <FaEye className="inline-block mr-2" />
                                <span>Live</span>
                            </Link>
                        )}
                        {project.git && (
                            <Link
                                href={project.git}
                                target="_blank"
                                className="rounded-full px-4 py-1 flex justify-center items-center bg-background/90 hover:bg-background/80  text-foreground transition-all duration-300 ease-in-out text-sm"
                                aria-label="GitHub"
                                rel="noreferrer noopener"
                            >
                                <FaGithub className="inline-block mr-2" />
                                <span>GitHub</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
);

Card.displayName = "Card";

import { IProject } from "@/constant/project";
import { PROJECTS_LIST } from "@/constant/project";

export default function ProjectGrid() {
    const projects: IProject[] = PROJECTS_LIST;
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto md:px-8 w-full">
            {projects.map((project, index) => (
                <Card
                    index={index}
                    key={project.name}
                    project={project}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
}
