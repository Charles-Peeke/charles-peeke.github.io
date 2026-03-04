# Project Structure Guide

This document explains the organized folder structure of the portfolio website and how to navigate and extend it.

## Directory Organization

```
personal-portfolio-site/
├── client/
│   ├── public/
│   │   └── images/              # Static images and assets
│   ├── src/
│   │   ├── pages/               # Page components organized by feature
│   │   │   ├── portfolio/       # Portfolio showcase pages
│   │   │   │   └── Portfolio.tsx
│   │   │   ├── partnerships/    # Partnerships and collaborations
│   │   │   │   └── Partnerships.tsx
│   │   │   ├── ventures/        # Business ventures
│   │   │   │   └── Ventures.tsx
│   │   │   ├── blog/            # Blog and articles
│   │   │   │   └── Blog.tsx
│   │   │   ├── contact/         # Contact and communication
│   │   │   │   └── Contact.tsx
│   │   │   ├── dashboard/       # Dashboard and statistics
│   │   │   │   └── Dashboard.tsx
│   │   │   ├── events/          # Events and speaking
│   │   │   │   └── Events.tsx
│   │   │   └── shared/          # Shared pages (Home, 404)
│   │   │       ├── Home.tsx
│   │   │       └── NotFound.tsx
│   │   ├── components/          # Reusable components
│   │   │   ├── layout/          # Layout components
│   │   │   │   ├── Navigation.tsx
│   │   │   │   └── Footer.tsx
│   │   │   ├── portfolio/       # Portfolio-specific components
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   ├── PartnershipCard.tsx
│   │   │   │   └── VentureCard.tsx
│   │   │   ├── shared/          # Shared utility components
│   │   │   │   └── ErrorBoundary.tsx
│   │   │   └── ui/              # shadcn/ui components
│   │   ├── lib/                 # Utilities and hooks
│   │   │   ├── data/            # Data and content management
│   │   │   │   └── portfolio-data.ts
│   │   │   ├── hooks/           # Custom hooks and context
│   │   │   │   └── ThemeContext.tsx
│   │   │   ├── utils/           # Utility functions
│   │   │   └── utils.ts
│   │   ├── contexts/            # (Deprecated - moved to lib/hooks)
│   │   ├── App.tsx              # Main app component with routing
│   │   ├── main.tsx             # React entry point
│   │   └── index.css            # Global styles and design tokens
│   └── index.html
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions deployment
├── tailwind.config.ts           # Tailwind CSS configuration
├── package.json
├── README.md                    # Main documentation
├── QUICKSTART.md                # Quick start guide
├── CUSTOMIZATION.md             # Customization guide
└── STRUCTURE.md                 # This file
```

## Folder Organization Philosophy

The project is organized by **feature domains** rather than by file type. This approach makes it easier to:

- **Find related code**: All portfolio-related files are in one place
- **Scale features**: Adding a new feature section (e.g., "Speaking") is straightforward
- **Manage dependencies**: Each feature folder is self-contained
- **Refactor safely**: Changes to one feature don't affect others

### Pages Organization

Each page type has its own folder:

- **`pages/portfolio/`**: Project showcase and filtering
- **`pages/partnerships/`**: Collaboration and partnership display
- **`pages/ventures/`**: Business ventures and startups
- **`pages/blog/`**: Blog posts and articles
- **`pages/contact/`**: Contact form and communication
- **`pages/dashboard/`**: Statistics and overview
- **`pages/events/`**: Speaking engagements and conferences
- **`pages/shared/`**: Common pages (Home, 404)

### Components Organization

Components are grouped by purpose:

- **`components/layout/`**: Navigation and footer (site-wide layout)
- **`components/portfolio/`**: Cards for projects, partnerships, ventures
- **`components/shared/`**: Utility components (ErrorBoundary)
- **`components/ui/`**: shadcn/ui components (auto-generated)

### Library Organization

Utilities are organized by function:

- **`lib/data/`**: Content and data structures (portfolio-data.ts)
- **`lib/hooks/`**: React hooks and context (ThemeContext)
- **`lib/utils/`**: Helper functions and utilities

## Adding New Features

### Adding a New Page Type

1. Create a new folder in `pages/`:
   ```bash
   mkdir -p client/src/pages/your-feature
   ```

2. Create the page component:
   ```bash
   touch client/src/pages/your-feature/YourFeature.tsx
   ```

3. Use the template:
   ```typescript
   import { Navigation } from "@/components/layout/Navigation";
   import { Footer } from "@/components/layout/Footer";

   export default function YourFeature() {
     return (
       <div className="min-h-screen flex flex-col">
         <Navigation />
         <main className="flex-1">
           {/* Your content */}
         </main>
         <Footer />
       </div>
     );
   }
   ```

4. Add the route to `App.tsx`:
   ```typescript
   import YourFeature from "@/pages/your-feature/YourFeature";
   
   <Route path={"/your-feature"} component={YourFeature} />
   ```

5. Add the navigation link in `components/layout/Navigation.tsx`

### Adding a New Card Component

1. Create the component in `components/portfolio/`:
   ```bash
   touch client/src/components/portfolio/YourCard.tsx
   ```

2. Follow the existing card pattern:
   ```typescript
   interface YourCardProps {
     item: YourType;
   }

   export function YourCard({ item }: YourCardProps) {
     return (
       <div className="card-warm p-6 md:p-8 border border-warm-lightBeige">
         {/* Card content */}
       </div>
     );
   }
   ```

3. Import and use in your page

### Adding New Data

1. Edit `lib/data/portfolio-data.ts`
2. Add your data structure and sample data
3. Import in your page component

## Import Paths

All imports use the `@/` alias which points to `client/src/`:

```typescript
// ✅ Correct
import { Navigation } from "@/components/layout/Navigation";
import { projects } from "@/lib/data/portfolio-data";
import Home from "@/pages/shared/Home";

// ❌ Avoid
import { Navigation } from "../../../components/layout/Navigation";
```

## File Naming Conventions

- **Pages**: PascalCase (e.g., `Portfolio.tsx`, `Home.tsx`)
- **Components**: PascalCase (e.g., `ProjectCard.tsx`, `Navigation.tsx`)
- **Utilities**: camelCase (e.g., `portfolio-data.ts`, `utils.ts`)
- **Folders**: kebab-case (e.g., `portfolio/`, `shared/`)

## Scaling the Project

As your portfolio grows, you can:

1. **Add more pages**: Create new folders in `pages/`
2. **Create page-specific components**: Add `components/your-feature/` for feature-specific components
3. **Organize data**: Create separate files in `lib/data/` for different data types
4. **Add utilities**: Create files in `lib/utils/` for helper functions

Example expanded structure:
```
pages/
├── portfolio/
│   ├── Portfolio.tsx
│   ├── ProjectDetail.tsx        # New: Detail page
│   └── ProjectSearch.tsx        # New: Search page
├── blog/
│   ├── Blog.tsx
│   ├── BlogPost.tsx             # New: Individual post
│   └── BlogCategory.tsx         # New: Category view
└── ...

components/
├── portfolio/
│   ├── ProjectCard.tsx
│   ├── ProjectGrid.tsx          # New: Grid layout
│   └── ProjectFilter.tsx        # New: Filter component
└── ...

lib/
├── data/
│   ├── portfolio-data.ts
│   ├── blog-data.ts             # New: Blog data
│   └── team-data.ts             # New: Team data
└── ...
```

## Best Practices

1. **Keep pages focused**: Each page should handle one feature
2. **Reuse components**: Use the card components across different pages
3. **Centralize data**: All content lives in `lib/data/`
4. **Use consistent imports**: Always use `@/` paths
5. **Follow naming conventions**: Makes code predictable and searchable
6. **Group related files**: Keep feature-related code together

## Troubleshooting

**Import errors after reorganization?**
- Check that paths use `@/` alias
- Verify the file exists in the correct folder
- Restart the dev server

**Can't find a component?**
- Check `components/` folder structure
- Use IDE search (Ctrl+Shift+F) to find files
- Verify imports in `App.tsx`

**Page not rendering?**
- Check route is added to `App.tsx`
- Verify navigation link is updated
- Check browser console for errors

## Related Documentation

- **README.md**: General setup and deployment
- **CUSTOMIZATION.md**: How to customize content and design
- **QUICKSTART.md**: 5-minute setup guide
