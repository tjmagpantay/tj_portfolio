"use client";

import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export type Project = {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  pillLabel: string;
  image: string;
  link?: string;
};

interface ProjectDetailsDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailsDialog({
  project,
  isOpen,
  onClose,
}: ProjectDetailsDialogProps) {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <Card
        className="w-full max-w-4xl overflow-hidden border border-border bg-card shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border p-4 sm:p-6">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {project.category}
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
              {project.title}
            </h2>
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Close project details"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-60 bg-muted sm:min-h-80 lg:min-h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-5 p-4 sm:p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs px-3 py-1"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent"
              >
                <ExternalLink className="h-4 w-4" />
                Open project
              </a>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
