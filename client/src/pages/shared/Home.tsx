/**
 * Home Page
 * Landing page with hero section, featured projects, and interactive skills section.
 * Design: Warm Craft - welcoming, sophisticated introduction with visual proficiency indicators
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { SkillsGrid } from "@/components/skills/SkillsGrid";
import { projects, skills } from "@/lib/data/portfolio-data";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm-cream via-white to-warm-lightBeige py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                Software Engineer & Systems Architect
              </h1>
              <p className="font-body text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                I design and build scalable systems, lead technical teams, and
                contribute to open-source. Passionate about solving complex
                problems with elegant code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/portfolio"
                  className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 bg-accent text-accent-foreground hover:shadow-lg inline-flex items-center justify-center gap-2"
                >
                  View My Work
                  <ArrowRight size={20} />
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 bg-secondary text-secondary-foreground hover:shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="section-divider py-20 md:py-32">
          <div className="container">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              A selection of recent work showcasing my expertise in distributed
              systems, backend architecture, and full-stack development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all hover:no-underline"
              >
                View All Projects
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Skills Section */}
        <section className="bg-warm-lightBeige py-20 md:py-32">
          <div className="container">
            <div className="mb-16">
              <h2
                className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Skills & Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A comprehensive overview of my technical proficiencies across
                backend systems, frontend development, infrastructure, and data
                management.
              </p>
            </div>

            {/* Skills Grid with Proficiency Indicators */}
            <SkillsGrid skills={skills} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="bg-accent text-accent-foreground rounded-lg p-12 md:p-16 text-center">
              <h2
                className="font-display text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Let's Build Something Great
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Interested in collaborating or discussing a project? I'd love to
                hear from you.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-accent-foreground text-accent font-semibold rounded-lg hover:shadow-lg transition-shadow hover:no-underline"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
