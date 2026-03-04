/**
 * Events Page (Placeholder)
 * Events, talks, and conference appearances.
 * Design: Warm Craft - event listing interface
 */

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Distributed Systems Workshop",
      date: "2024-03-15",
      location: "San Francisco, CA",
      description: "A hands-on workshop on building distributed systems.",
      link: "#",
    },
    {
      id: 2,
      title: "Tech Conference 2024",
      date: "2024-04-20",
      location: "New York, NY",
      description: "Speaking on microservices architecture and best practices.",
      link: "#",
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Open Source Summit",
      date: "2023-11-10",
      location: "Portland, OR",
      description: "Panel discussion on open-source sustainability.",
      link: "#",
    },
    {
      id: 4,
      title: "DevOps Days",
      date: "2023-09-22",
      location: "Seattle, WA",
      description: "Talk on Kubernetes optimization techniques.",
      link: "#",
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
              Events & Speaking
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Conferences, workshops, and speaking engagements where I share
              knowledge and connect with the tech community.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 md:py-32">
          <div className="container">
            <h2
              className="text-4xl font-bold text-foreground mb-12"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Upcoming Events
            </h2>

            {upcomingEvents.length > 0 ? (
              <div className="space-y-6 mb-16">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="card-warm p-8 border border-warm-lightBeige border-l-4 border-l-accent"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3
                        className="text-2xl font-bold text-foreground"
                        style={{ fontFamily: '"Playfair Display", serif' }}
                      >
                        {event.title}
                      </h3>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent text-accent-foreground">
                        Upcoming
                      </span>
                    </div>

                    <p className="text-base text-muted-foreground mb-4">
                      {event.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={18} />
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin size={18} />
                        {event.location}
                      </div>
                    </div>

                    <a
                      href={event.link}
                      className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                    >
                      Learn More
                      <ExternalLink size={18} />
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg text-muted-foreground mb-16">
                No upcoming events scheduled. Check back soon!
              </p>
            )}

            {/* Past Events */}
            <h2
              className="text-4xl font-bold text-foreground mb-12"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Past Events
            </h2>

            {pastEvents.length > 0 ? (
              <div className="space-y-6">
                {pastEvents.map((event) => (
                  <div
                    key={event.id}
                    className="card-warm p-8 border border-warm-lightBeige opacity-75 hover:opacity-100 transition-opacity"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3
                        className="text-2xl font-bold text-foreground"
                        style={{ fontFamily: '"Playfair Display", serif' }}
                      >
                        {event.title}
                      </h3>
                    </div>

                    <p className="text-base text-muted-foreground mb-4">
                      {event.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={18} />
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin size={18} />
                        {event.location}
                      </div>
                    </div>

                    <a
                      href={event.link}
                      className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                    >
                      View Details
                      <ExternalLink size={18} />
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg text-muted-foreground">
                No past events to display.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
