/**
 * Portfolio Page
 * Displays all projects with filtering by category (current/archived).
 * Design: Warm Craft - organized, filterable project showcase
 */

import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/lib/data/portfolio-data";

type FilterType = "all" | "current" | "archived";

export default function Portfolio() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-warm-cream via-white to-warm-lightBeige py-16 md:py-24">
          <div className="container">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
              Portfolio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive collection of projects spanning distributed systems,
              cloud infrastructure, and full-stack development.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12">
          <div className="container">
            <div className="flex flex-wrap gap-4">
              {(["all", "current", "archived"] as const).map((filterOption) => (
                <button
                  key={filterOption}
                  onClick={() => setFilter(filterOption)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    filter === filterOption
                      ? "bg-accent text-accent-foreground shadow-warm-hover"
                      : "bg-warm-lightBeige text-foreground hover:bg-border"
                  }`}
                >
                  {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 md:py-20">
          <div className="container">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
