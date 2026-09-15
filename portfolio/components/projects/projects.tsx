"use client";

import {
  ArrowRight,
  Globe,
  Sparkles,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";
import { Button } from "@heroui/react";

/**
 * Project imagery below is mockup-only. All visuals are sourced from
 * Dribbble and credit belongs to the original creators on dribbble.com.
 * Replace these with your own work before shipping.
 */

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  link?: string;
};

const PROJECTS: Project[] = [
  {
    id: "world",
    icon: Globe,
    iconLabel: "Youlee World",
    title:
      "Music Production CMS & Portofolio Presentation Web Application",
    description:
      "A complete solution for managing and listening to music production, showcasing portfolio projects, accumulated credits, and collaborations, all in one web application.",
    meta: "Solution Engineer & Software Developer, 2026",
    imageRatio: 752 / 497,
    image:
      "/youlee-world-ss.png",
    imageAlt: "Youlee World",
    link: "https://www.youlee.world",
  },
  {
    id: "fistic",
    icon: Sparkles,
    iconLabel: "FISTIC Supreme",
    title:
      "FISTIC Supreme (Pancakes, Donnuts and Sweet Treats) - Presentation Website Funnel",
    description:
      "I communicated with the client throughout the development process to ensure their vision was accurately represented.",
    meta: "Designer Engineer & Web Developer, 2026",
    imageRatio: 752 / 497,
    image:
      "/fisticsupreme-ss.png",
    imageAlt: "FISTIC Supreme",
    link: "https://www.fisticsupreme.ro",
  },
  {
    id: "padel",
    icon: Sparkles,
    iconLabel: "ONE Padel Club",
    title:
      "ONE Padel Club is a presentation website for the club, providing information about facilities, events, and membership options.",
    description:
      "ONE Padel Club is a demo website for the club, providing information about facilities, events, and membership options.",
    meta: "Web Design and Development, 2026",
    imageRatio: 752 / 497,
    image:
      "/onepadelclub-ss.png",
    imageAlt: "ONE Padel Club",
    link: "https://onepadelclub.vercel.app",
  },
  {
    id: "orthotecs",
    icon: Sparkles,
    iconLabel: "Orthotecs",
    title:
      "Orthotecs is a demo website for the company providing information about products, services, and contact options.",
    description:
      "I developed this demo website to showcase the company's offerings and provide an interactive experience for users. This helped the company attract potential clients and demonstrate its capabilities effectively.",
    meta: "Web Design and Development, 2026",
    imageRatio: 752 / 497,
    image:
      "/orthotecs-ss.png",
    imageAlt: "Orthotecs",
    link: "https://orthotecs.de",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        <FadeIn className="flex flex-col items-center gap-8 pb-10 sm:pb-50">
          <div className="grid grid-cols-3 gap-10 sm:gap-25">
            <div className="flex flex-col items-center gap-2">
              <p className="font-serif text-7xl font-semibold text-foreground md:text-6xl">
                3+
              </p>
              <p className="text-sm font-medium tracking-tight text-foreground/65">
                Delivered Projects
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="font-serif text-7xl font-semibold text-foreground md:text-6xl">
                10+
              </p>
              <p className="text-sm font-medium tracking-tight text-foreground/65">
                Repositories & Personal Projects
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="font-serif text-7xl font-semibold text-foreground md:text-6xl">
                5+
              </p>
              <p className="text-sm font-medium tracking-tight text-foreground/65">
                Open Source Contributions
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5 ring-1 ring-foreground/8"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
          {project.meta}
        </p>

        {project.link && (
          <a className="flex flex-1 items-center space-x-5 justify-around">
            <Button
              onClick={() => window.location.href = "mailto:andreighita03@gmail.com"}
              variant="secondary"
              className="flex-1"
            >
              Contact for Collaboration
            </Button>
            <Button
              onClick={() => window.open(project.link, "_blank")}
              variant="primary"
              className="flex-1"
            >
              Visit LIVE Preview
            </Button>
          </a>
        )}
      </article>
    </FadeIn>
  );
}
