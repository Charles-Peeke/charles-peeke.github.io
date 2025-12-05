/**
 * SkillCard Component
 * Displays a single skill with proficiency level indicator
 * Design: Warm Craft - subtle animations and visual hierarchy
 */

import { useEffect, useRef } from "react";
import type { SkillItem } from "@/lib/data/portfolio-data";

interface SkillCardProps {
  skill: SkillItem;
  index?: number;
}

export function SkillCard({ skill, index = 0 }: SkillCardProps) {
  const barRef = useRef<HTMLDivElement>(null);

  // Determine proficiency percentage and color
  const proficiencyMap = {
    expert: { percentage: 90, color: "from-accent to-warm-terracotta" },
    advanced: { percentage: 75, color: "from-warm-sage to-accent" },
    intermediate: { percentage: 60, color: "from-warm-gold to-warm-sage" },
  };

  const { percentage, color } = proficiencyMap[skill.proficiency];

  // Stagger animation based on index
  const animationDelay = `${index * 50}ms`;

  useEffect(() => {
    if (barRef.current) {
      // Trigger animation on mount
      setTimeout(() => {
        if (barRef.current) {
          barRef.current.style.width = `${percentage}%`;
        }
      }, 0);
    }
  }, [percentage]);

  return (
    <div
      className="group animate-in fade-in slide-in-from-bottom-4 duration-500"
      style={{
        animationDelay,
      }}
    >
      <div className="card-warm p-4 md:p-6 border border-warm-lightBeige hover:border-accent hover:shadow-lg transition-all duration-300">
        {/* Skill Name */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
            {skill.name}
          </h3>
          <span
            className={`text-xs font-bold px-2 py-1 rounded-full ${
              skill.proficiency === "expert"
                ? "bg-accent text-accent-foreground"
                : skill.proficiency === "advanced"
                  ? "bg-warm-sage text-white"
                  : "bg-warm-gold text-warm-darkBrown"
            }`}
          >
            {skill.proficiency.charAt(0).toUpperCase() + skill.proficiency.slice(1)}
          </span>
        </div>

        {/* Proficiency Bar */}
        <div className="w-full h-2 bg-warm-lightBeige rounded-full overflow-hidden">
          <div
            ref={barRef}
            className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out group-hover:shadow-lg`}
            style={{
              width: 0,
            }}
          />
        </div>

        {/* Proficiency Text */}
        <p className="text-xs text-muted-foreground mt-2">
          {percentage}% Proficiency
        </p>
      </div>
    </div>
  );
}
