# Portfolio Features Guide

This document describes the implemented features and how to use them.

## Project Detail Page

The project detail page provides a comprehensive view of individual projects with rich content and navigation.

### Features

- **Project Header**: Displays project title, status badge (Current/Archived), and timeline
- **Overview Section**: Detailed description of the project and its purpose
- **Technologies Section**: List of all technologies and tools used
- **Links Section**: Direct links to live project and GitHub repository
- **Project Info Sidebar**: Quick reference card with status, timeline, and technology count
- **Related Projects**: Automatically displays 2 related projects from the same category
- **Call-to-Action**: Encourages visitors to get in touch for collaboration
- **Navigation**: Easy back button to return to the portfolio listing

### How to Access

1. Navigate to the **Portfolio** page
2. Click on any project card to view its details
3. The URL will be `/portfolio/{project-id}`
4. Use the "Back to Portfolio" button to return to the listing

### How to Add Projects

Edit `client/src/lib/data/portfolio-data.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "your-project-id",
    title: "Your Project Title",
    description: "Short description for the card",
    longDescription: "Detailed description for the detail page",
    category: "current", // or "archived"
    featured: true,
    technologies: ["React", "Node.js", "PostgreSQL"],
    startDate: "2024-01",
    endDate: "2024-06",
    link: "https://example.com",
    github: "https://github.com/username/repo",
  },
  // ... more projects
];
```

### Project Data Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the project |
| `title` | string | Yes | Project title (displayed on cards and detail page) |
| `description` | string | Yes | Short description for portfolio listing |
| `longDescription` | string | No | Detailed description for detail page |
| `category` | "current" \| "archived" | Yes | Project status |
| `featured` | boolean | No | Show "Featured" badge on card |
| `technologies` | string[] | Yes | List of technologies used |
| `startDate` | string | No | Project start date (YYYY-MM format) |
| `endDate` | string | No | Project end date (YYYY-MM format) |
| `link` | string | No | URL to live project |
| `github` | string | No | URL to GitHub repository |

### Filtering

The portfolio page includes filtering buttons:

- **All**: Show all projects
- **Current**: Show only active projects
- **Archived**: Show only archived projects

### Related Projects

The detail page automatically shows up to 2 related projects based on category matching. To customize this:

1. Edit `client/src/pages/portfolio/ProjectDetail.tsx`
2. Modify the `relatedProjects` filter logic
3. Adjust the `.slice(0, 2)` to show more/fewer related projects

## Adding New Features

### Adding a New Page Type

1. Create a folder in `client/src/pages/`:
   ```bash
   mkdir -p client/src/pages/your-feature
   ```

2. Create the page component:
   ```bash
   touch client/src/pages/your-feature/YourFeature.tsx
   ```

3. Add the route to `client/src/App.tsx`:
   ```typescript
   import YourFeature from "@/pages/your-feature/YourFeature";
   
   <Route path={"/your-feature"} component={YourFeature} />
   ```

4. Add navigation link in `client/src/components/layout/Navigation.tsx`

### Adding a New Card Component

1. Create in `client/src/components/portfolio/`:
   ```bash
   touch client/src/components/portfolio/YourCard.tsx
   ```

2. Follow the existing pattern:
   ```typescript
   interface YourCardProps {
     item: YourType;
   }

   export function YourCard({ item }: YourCardProps) {
     return (
       <div className="card-warm p-6 md:p-8 border border-warm-lightBeige">
         {/* Content */}
       </div>
     );
   }
   ```

## Design System

### Color Palette

- **Primary Accent**: `#C85A3A` (Warm Terracotta)
- **Sage Green**: `#7A9B7E` (Partnerships/Secondary)
- **Dark Brown**: `#3D2817` (Text/Foreground)
- **Light Beige**: `#F5F1ED` (Backgrounds)
- **Cream**: `#FFFBF7` (Primary Background)

### Typography

- **Display Font**: Playfair Display (serif) - Headlines and titles
- **Body Font**: Lora (serif) - Body text and descriptions
- **Fallback**: System fonts for optimal performance

### Spacing

- Mobile: 1rem (16px) padding
- Tablet: 1.5rem (24px) padding
- Desktop: 2rem (32px) padding

### Components

All components use the `card-warm` class for consistent styling:

```html
<div class="card-warm p-6 md:p-8 border border-warm-lightBeige">
  <!-- Content -->
</div>
```

## Performance Tips

1. **Optimize Images**: Keep project images under 500KB
2. **Lazy Load**: Images load on demand to improve page speed
3. **Minimize Data**: Keep descriptions concise for faster rendering
4. **Cache Busting**: Add content hash to image filenames when updating

## Troubleshooting

### Project Detail Page Not Found

- Verify the project `id` matches exactly in the URL
- Check that the project exists in `portfolio-data.ts`
- Restart the dev server: `pnpm dev`

### Related Projects Not Showing

- Ensure projects have the same `category` value
- Check that there are at least 2 projects with the same category
- Verify the filter logic in `ProjectDetail.tsx`

### Styling Issues

- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server: `pnpm dev`
- Check that Tailwind CSS is properly configured

## Next Steps

Consider implementing:

1. **Project Search**: Add search functionality to find projects by title or technology
2. **Project Tags**: Implement tag-based filtering for more granular organization
3. **Project Sorting**: Add sorting by date, technology, or custom order
4. **Project Analytics**: Track which projects get the most views
5. **Project Comments**: Allow visitors to leave feedback on projects
