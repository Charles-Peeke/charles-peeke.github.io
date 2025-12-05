/**
 * SkillsGrid Component
 * Displays skills organized by category with interactive cards
 * Design: Warm Craft - organized grid with category headers and smooth animations
 */

import { SkillCard } from "./SkillCard";
import type { Skill } from "@/lib/data/portfolio-data";

interface SkillsGridProps {
  skills: Skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <div className="space-y-16 md:space-y-20">
      {skills.map((skillCategory, categoryIndex) => (
        <div
          key={skillCategory.category}
          className="animate-in fade-in duration-500"
          style={{
            animationDelay: `${categoryIndex * 100}ms`,
          }}
        >
          {/* Category Header */}
          <div className="mb-8">
            <h3
              className="text-3xl md:text-4xl font-bold text-foreground mb-2"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {skillCategory.category}
            </h3>
            <div className="h-1 w-16 bg-gradient-to-r from-accent to-warm-terracotta rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skillCategory.items.map((skill, skillIndex) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={categoryIndex * 10 + skillIndex}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
