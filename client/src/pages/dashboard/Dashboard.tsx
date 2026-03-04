/**
 * Dashboard Page (Placeholder)
 * Personal dashboard with statistics and quick links.
 * Design: Warm Craft - organized dashboard layout
 */

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { BarChart3, Users, FileText, Zap } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      label: "Projects Completed",
      value: "24",
      icon: FileText,
      color: "text-accent",
    },
    {
      label: "Active Partnerships",
      value: "5",
      icon: Users,
      color: "text-warm-sage",
    },
    {
      label: "Years Experience",
      value: "8+",
      icon: Zap,
      color: "text-warm-tan",
    },
    {
      label: "Blog Posts",
      value: "12",
      icon: BarChart3,
      color: "text-warm-darkBrown",
    },
  ];

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
              Dashboard
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Quick overview of my professional work and achievements.
            </p>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="card-warm p-6 border border-warm-lightBeige"
                  >
                    <Icon className={`${stat.color} mb-4`} size={32} />
                    <p className="text-sm text-muted-foreground mb-2">
                      {stat.label}
                    </p>
                    <p
                      className="text-4xl font-bold text-foreground"
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      {stat.value}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-warm p-8 border border-warm-lightBeige">
                <h2
                  className="text-2xl font-bold text-foreground mb-6"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Recent Projects
                </h2>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border">
                    <h3 className="font-semibold text-foreground mb-1">
                      Real-Time Collaboration Platform
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      WebSocket-based platform for distributed teams
                    </p>
                  </div>
                  <div className="pb-4 border-b border-border">
                    <h3 className="font-semibold text-foreground mb-1">
                      ML Pipeline Orchestrator
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Kubernetes-based ML training infrastructure
                    </p>
                  </div>
                  <div>
                    <a
                      href="/portfolio"
                      className="text-accent font-semibold hover:underline"
                    >
                      View All Projects →
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-warm p-8 border border-warm-lightBeige">
                <h2
                  className="text-2xl font-bold text-foreground mb-6"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Quick Actions
                </h2>
                <div className="space-y-3">
                  <a
                    href="/portfolio"
                    className="block px-4 py-3 rounded-lg bg-warm-lightBeige text-foreground font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Browse Portfolio
                  </a>
                  <a
                    href="/blog"
                    className="block px-4 py-3 rounded-lg bg-warm-lightBeige text-foreground font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Read Blog
                  </a>
                  <a
                    href="/contact"
                    className="block px-4 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:shadow-lg transition-shadow"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
