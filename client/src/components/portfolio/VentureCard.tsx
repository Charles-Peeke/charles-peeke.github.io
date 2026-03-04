/**
 * VentureCard Component
 * Displays a business venture with status, role, and description.
 * Design: Warm Craft - color-coded status indicators
 */

import { ExternalLink } from "lucide-react";
import type { BusinessVenture } from "@/lib/portfolio-data";

interface VentureCardProps {
  venture: BusinessVenture;
}

export function VentureCard({ venture }: VentureCardProps) {
  const statusColors = {
    active: "bg-accent text-accent-foreground",
    inactive: "bg-muted text-muted-foreground",
    planning: "bg-warm-sage text-white",
  };

  return (
    <div className="card-warm p-6 md:p-8 border border-warm-lightBeige">
      {/* Status Badge */}
      <div className="flex items-start justify-between mb-4">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            statusColors[venture.status]
          }`}
        >
          {venture.status.charAt(0).toUpperCase() + venture.status.slice(1)}
        </span>
      </div>

      {/* Venture Name */}
      <h3 className="font-display text-2xl text-foreground mb-2">
        {venture.name}
      </h3>

      {/* Role */}
      <p className="text-sm font-semibold text-accent mb-3">
        {venture.role}
      </p>

      {/* Description */}
      <p className="text-base text-foreground mb-6 leading-relaxed">
        {venture.description}
      </p>

      {/* Link */}
      {venture.link && (
        <a
          href={venture.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent hover:text-accent font-semibold transition-colors"
        >
          <ExternalLink size={18} />
          Visit
        </a>
      )}
    </div>
  );
}
