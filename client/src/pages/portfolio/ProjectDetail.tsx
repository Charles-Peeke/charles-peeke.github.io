/**
 * Project Detail Page
 * Displays comprehensive information about a single project with rich media.
 * Design: Warm Craft - rich, detailed project showcase with images and galleries
 */

import { useParams, useLocation } from "wouter";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ImageGallery } from "@/components/portfolio/ImageGallery";
import { ProjectHighlights } from "@/components/portfolio/ProjectHighlights";
import { projects } from "@/lib/data/portfolio-data";
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function ProjectDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const projectId = params.id as string;

  // Find the project
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center py-32">
          <div className="container text-center">
            <h1
              className="text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Project Not Found
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link href="/portfolio">
              <a className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg transition-shadow hover:no-underline">
                <ArrowLeft size={20} />
                Back to Portfolio
              </a>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related projects (same category, different project)
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Back Button */}
        <div className="bg-warm-lightBeige py-4 sticky top-16 z-40">
          <div className="container">
            <button
              onClick={() => setLocation("/portfolio")}
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all hover:no-underline"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </button>
          </div>
        </div>

        {/* Hero Section with Image */}
        <section className="bg-gradient-to-br from-warm-cream via-white to-warm-lightBeige">
          {/* Hero Image */}
          {project.image && (
            <div className="w-full h-96 md:h-[500px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Hero Content */}
          <div className="py-16 md:py-24">
            <div className="container">
              <div className="max-w-4xl">
                {/* Status Badge */}
                <div className="mb-6">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      project.category === "current"
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {project.category === "current" ? "Current" : "Archived"}
                  </span>
                </div>

                {/* Title */}
                <h1
                  className="text-5xl md:text-6xl font-bold text-foreground mb-6"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {project.title}
                </h1>

                {/* Metadata */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {project.startDate && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={20} />
                      <span>
                        {project.startDate}
                        {project.endDate && ` – ${project.endDate}`}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 md:py-32">
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="md:col-span-2">
                {/* Long Description */}
                {project.longDescription && (
                  <div className="mb-12">
                    <h2
                      className="text-3xl font-bold text-foreground mb-6"
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      Overview
                    </h2>
                    <p className="text-base text-foreground leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>
                )}

                {/* Project Highlights with Media */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-12">
                    <ProjectHighlights highlights={project.highlights} />
                  </div>
                )}

                {/* Gallery Section */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="mb-12">
                    <ImageGallery
                      images={project.gallery}
                      title="Project Gallery"
                    />
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-12">
                  <h2
                    className="text-3xl font-bold text-foreground mb-6"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    Technologies
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-lg bg-warm-lightBeige text-warm-darkBrown font-medium text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mb-12">
                  <h2
                    className="text-3xl font-bold text-foreground mb-6"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    Links
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg transition-shadow"
                      >
                        <ExternalLink size={20} />
                        View Project
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-warm-lightBeige text-foreground font-semibold rounded-lg hover:bg-border transition-colors"
                      >
                        <Github size={20} />
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-1">
                {/* Quick Info Card */}
                <div className="card-warm p-6 border border-warm-lightBeige sticky top-24">
                  <h3
                    className="text-xl font-bold text-foreground mb-4"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    Project Info
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                        Status
                      </p>
                      <p className="text-sm font-medium text-foreground capitalize">
                        {project.category}
                      </p>
                    </div>

                    {project.startDate && (
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                          Timeline
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {project.startDate}
                          {project.endDate && ` – ${project.endDate}`}
                        </p>
                      </div>
                    )}

                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                        Technologies
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {project.technologies.length} tools
                      </p>
                    </div>

                    {project.gallery && project.gallery.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                          Gallery
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {project.gallery.length} images
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="bg-warm-lightBeige py-20 md:py-32">
            <div className="container">
              <h2
                className="text-4xl font-bold text-foreground mb-12"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Related Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <ProjectCard
                    key={relatedProject.id}
                    project={relatedProject}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="bg-accent text-accent-foreground rounded-lg p-12 md:p-16 text-center">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Interested in Working Together?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                If you'd like to discuss this project or explore collaboration
                opportunities, I'd love to hear from you.
              </p>
              <Link href="/contact">
                <a className="inline-block px-8 py-3 bg-accent-foreground text-accent font-semibold rounded-lg hover:shadow-lg transition-shadow hover:no-underline">
                  Get In Touch
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
