/**
 * ProjectHighlights Component
 * Displays project highlights including images, videos, and text sections
 * Design: Warm Craft - alternating layout with rich media
 */

import type { ProjectHighlight } from "@/lib/data/portfolio-data";
import { Play } from "lucide-react";

interface ProjectHighlightsProps {
  highlights?: ProjectHighlight[];
}

export function ProjectHighlights({ highlights }: ProjectHighlightsProps) {
  if (!highlights || highlights.length === 0) {
    return null;
  }

  // Sort highlights by order
  const sortedHighlights = [...highlights].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-16 md:space-y-24">
      {sortedHighlights.map((highlight, index) => (
        <div key={index}>
          {/* Image Highlight */}
          {highlight.type === "image" && (
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`rounded-lg overflow-hidden bg-warm-lightBeige aspect-video ${
                  index % 2 === 1 ? "md:col-start-2" : ""
                }`}
              >
                <img
                  src={highlight.content}
                  alt={highlight.title || "Project highlight"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                {highlight.title && (
                  <h3
                    className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    {highlight.title}
                  </h3>
                )}
                {highlight.description && (
                  <p className="text-base text-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Video Highlight */}
          {highlight.type === "video" && (
            <div className="rounded-lg overflow-hidden bg-black aspect-video relative group cursor-pointer">
              <video
                src={highlight.content}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Play size={32} className="ml-1" fill="currentColor" />
                </div>
              </div>
              {highlight.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">
                    {highlight.title}
                  </h3>
                  {highlight.description && (
                    <p className="text-sm text-white/80 mt-2">
                      {highlight.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Text Highlight */}
          {highlight.type === "text" && (
            <div className="bg-warm-lightBeige rounded-lg p-8 md:p-12">
              {highlight.title && (
                <h3
                  className="text-2xl md:text-3xl font-bold text-foreground mb-6"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {highlight.title}
                </h3>
              )}
              <div className="prose prose-lg max-w-none text-foreground">
                {highlight.content.split("\n").map((line, i) => (
                  <p key={i} className="mb-3 last:mb-0 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Gallery Highlight */}
          {highlight.type === "gallery" && (
            <div>
              {highlight.title && (
                <h3
                  className="text-2xl md:text-3xl font-bold text-foreground mb-6"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {highlight.title}
                </h3>
              )}
              {highlight.description && (
                <p className="text-base text-foreground mb-8 leading-relaxed">
                  {highlight.description}
                </p>
              )}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Parse gallery content as comma-separated URLs */}
                {highlight.content.split(",").map((url, i) => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden bg-warm-lightBeige aspect-square"
                  >
                    <img
                      src={url.trim()}
                      alt={`Gallery item ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
