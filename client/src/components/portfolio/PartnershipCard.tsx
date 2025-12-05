/**
 * PartnershipCard Component
 * Displays a partnership or collaboration with organization details and role.
 * Design: Warm Craft - minimal styling with emphasis on content
 */

import { ExternalLink } from "lucide-react";
import type { Partnership } from "@/lib/portfolio-data";

interface PartnershipCardProps {
  partnership: Partnership;
}

export function PartnershipCard({ partnership }: PartnershipCardProps) {
  return (
    <div className="card-warm p-6 md:p-8 border border-warm-lightBeige">
      {/* Partnership Name */}
      <h3 className="font-display text-2xl text-foreground mb-2">
        {partnership.name}
      </h3>

      {/* Role */}
      <p className="text-sm font-semibold text-accent mb-3">
        {partnership.role}
      </p>

      {/* Start Date */}
      {partnership.startDate && (
        <p className="text-xs text-muted-foreground mb-4">
          Since {partnership.startDate}
        </p>
      )}

      {/* Description */}
      <p className="text-base text-foreground mb-6 leading-relaxed">
        {partnership.description}
      </p>

      {/* Link */}
      {partnership.link && (
        <a
          href={partnership.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent hover:text-accent font-semibold transition-colors"
        >
          <ExternalLink size={18} />
          Learn More
        </a>
      )}
    </div>
  );
}
