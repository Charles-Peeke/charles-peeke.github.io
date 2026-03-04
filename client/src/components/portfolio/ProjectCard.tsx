/**
 * ProjectCard Component
 * Displays a single project with title, description, technologies, and links.
 * Design: Warm Craft - soft shadows, rounded corners, hover effects
 * Clicking the card navigates to the project detail page.
 */

import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import type { Project } from "@/lib/data/portfolio-data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group card-warm overflow-hidden border border-warm-lightBeige hover:shadow-lg hover:border-accent transition-all duration-300">
      {/* Clickable wrapper for detail page */}
      <Link
        href={`/portfolio/${project.id}`}
        className="block hover:no-underline"
      >
        {/* Project Image */}
        {project.image && (
          <div className="relative w-full h-48 md:h-56 overflow-hidden bg-warm-lightBeige">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Badge for current/archived status */}
          <div className="flex items-start justify-between mb-4">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                project.category === "current"
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {project.category === "current" ? "Current" : "Archived"}
            </span>
            {project.featured && (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-warm-sage text-white">
                Featured
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3
            className="text-2xl md:text-3xl text-foreground mb-2"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {project.title}
          </h3>

          {/* Date Range */}
          {project.startDate && (
            <p className="text-sm text-muted-foreground mb-4">
              {project.startDate}
              {project.endDate && ` – ${project.endDate}`}
            </p>
          )}

          {/* Description */}
          <p className="text-base text-foreground mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-warm-lightBeige text-warm-darkBrown font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs px-3 py-1 rounded-full bg-warm-lightBeige text-warm-darkBrown font-medium">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* View Details Link */}
          <div className="flex items-center justify-between pt-6 border-t border-warm-lightBeige">
            <span className="text-accent font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              View Details
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </div>
        </div>
      </Link>

      {/* External Links - Stop propagation */}
      <div
        className="px-6 md:px-8 pb-6 md:pb-8 flex gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent font-semibold transition-colors"
          >
            <ExternalLink size={18} />
            <span className="text-xs">Live</span>
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent font-semibold transition-colors"
          >
            <Github size={18} />
            <span className="text-xs">Code</span>
          </a>
        )}
      </div>
    </div>
  );
}
