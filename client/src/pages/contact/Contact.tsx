/**
 * Contact Page (Placeholder)
 * Contact form and information page.
 * Design: Warm Craft - welcoming contact interface
 */

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
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
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Have a question or want to collaborate? I'd love to hear from you.
              Reach out through any of the channels below.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2
                  className="text-3xl font-bold text-foreground mb-8"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Send a Message
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-card text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-card text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 rounded-lg bg-card text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Your message here..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-card text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg transition-shadow"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2
                  className="text-3xl font-bold text-foreground mb-8"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Other Ways to Connect
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-accent mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:hello@example.com"
                        className="text-accent hover:underline"
                      >
                        hello@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Linkedin
                      className="text-accent mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        LinkedIn
                      </h3>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Github
                      className="text-accent mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        GitHub
                      </h3>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        View my repositories
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Twitter
                      className="text-accent mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Twitter
                      </h3>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Follow me on Twitter
                      </a>
                    </div>
                  </div>
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
