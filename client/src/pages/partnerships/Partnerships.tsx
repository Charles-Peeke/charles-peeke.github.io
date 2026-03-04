/**
 * Partnerships Page
 * Displays partnerships, collaborations, and professional relationships.
 * Design: Warm Craft - organized showcase of partnerships
 */

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PartnershipCard } from "@/components/portfolio/PartnershipCard";
import { partnerships } from "@/lib/data/portfolio-data";

export default function Partnerships() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-warm-cream via-white to-warm-lightBeige py-16 md:py-24">
          <div className="container">
            <h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Partnerships & Collaborations
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I actively collaborate with organizations and communities to advance
              open-source development and technical innovation.
            </p>
          </div>
        </section>

        {/* Partnerships Grid */}
        <section className="py-20 md:py-32">
          <div className="container">
            {partnerships.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {partnerships.map((partnership) => (
                  <PartnershipCard
                    key={partnership.id}
                    partnership={partnership}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">
                  No partnerships listed yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-warm-lightBeige py-16 md:py-24">
          <div className="container text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Interested in Collaborating?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new partnerships and collaborative
              opportunities. Reach out to explore how we can work together.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg transition-shadow"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
