/**
 * Blog Page (Placeholder)
 * Blog listing and articles page.
 * Design: Warm Craft - clean blog interface
 */

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Microservices",
      excerpt:
        "A deep dive into designing microservices architecture for high-traffic applications.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Architecture",
    },
    {
      id: 2,
      title: "Kubernetes Best Practices",
      excerpt:
        "Essential patterns and practices for deploying applications on Kubernetes.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "DevOps",
    },
    {
      id: 3,
      title: "React Performance Optimization",
      excerpt:
        "Techniques for optimizing React applications and improving user experience.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Frontend",
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
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Thoughts on software engineering, system design, and technology trends.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="card-warm p-8 border border-warm-lightBeige hover:shadow-warm-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-warm-lightBeige text-warm-darkBrown">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>

                  <h2
                    className="text-3xl font-bold text-foreground mb-3"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    {post.title}
                  </h2>

                  <p className="text-base text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all hover:no-underline"
                    >
                      Read More
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Placeholder for more posts */}
            <div className="mt-16 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                More articles coming soon...
              </p>
              <p className="text-sm text-muted-foreground">
                Subscribe to stay updated on new posts.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
