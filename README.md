# Professional Software Engineer Portfolio

A robust, modular personal portfolio website built with React, TypeScript, and Tailwind CSS. Designed for easy expansion with support for projects, partnerships, business ventures, and multiple page types.

## Features

**Core Portfolio Sections:**
- **Home**: Hero section with featured projects and call-to-action
- **Portfolio**: Showcase of current and archived projects with filtering
- **Partnerships**: Display of collaborations and professional relationships
- **Ventures**: Business ventures and entrepreneurial projects
- **Blog**: Article listing and blog content (placeholder ready for expansion)
- **Contact**: Contact form and social media links
- **Dashboard**: Quick statistics and overview (optional)
- **Events**: Speaking engagements and conference appearances (optional)

**Design System:**
- **Warm Craft Design Philosophy**: Warm earth tones, organic shapes, and handcrafted quality
- **Typography**: Playfair Display (headings) + Lora (body text)
- **Color Palette**: Terracotta accents, sage green, warm cream backgrounds
- **Responsive**: Mobile-first design with full responsive support
- **Modular Components**: Reusable card components for projects, partnerships, and ventures

## Project Structure

```
personal-portfolio-site/
├── client/
│   ├── public/
│   │   └── images/          # Static images and assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── portfolio/
│   │   │       ├── ProjectCard.tsx
│   │   │       ├── PartnershipCard.tsx
│   │   │       └── VentureCard.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Partnerships.tsx
│   │   │   ├── Ventures.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Events.tsx
│   │   │   └── NotFound.tsx
│   │   ├── lib/
│   │   │   └── portfolio-data.ts  # Centralized data management
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── tailwind.config.ts
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm/pnpm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/personal-portfolio-site.git
cd personal-portfolio-site

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`.

## Customization Guide

### 1. Update Portfolio Data

Edit `client/src/lib/portfolio-data.ts` to add your projects, partnerships, and ventures:

```typescript
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Your Project Title",
    description: "Short description",
    longDescription: "Detailed description",
    category: "current", // or "archived"
    technologies: ["React", "Node.js"],
    link: "https://example.com",
    github: "https://github.com/example",
    featured: true,
    startDate: "2024-01",
  },
  // Add more projects...
];
```

### 2. Customize Design

**Colors**: Edit `client/src/index.css` to modify the Warm Craft color palette:
- `--primary`: Terracotta accent color
- `--secondary`: Sage green
- `--background`: Warm cream background
- `--foreground`: Warm brown text

**Typography**: Fonts are loaded from Google Fonts in `client/index.html`:
- Display: Playfair Display
- Body: Lora

### 3. Update Navigation

Edit `client/src/components/layout/Navigation.tsx` to add or remove navigation links:

```typescript
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  // Add custom links here
];
```

### 4. Customize Content

Each page is a standalone React component in `client/src/pages/`. Edit them directly to customize content, add sections, or modify layouts.

### 5. Add Images

Place images in `client/public/images/` and reference them in your components:

```tsx
<img src="/images/your-image.jpg" alt="Description" />
```

## Building for Production

```bash
# Build the site
pnpm build

# Preview production build locally
pnpm preview
```

## Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. **Create a GitHub repository** and push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/personal-portfolio-site.git
git push -u origin main
```

2. **Create a GitHub Actions workflow** (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm install -g pnpm && pnpm install

      - name: Build
        run: pnpm build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

3. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Set source to "Deploy from a branch"
   - Select `gh-pages` branch

### Option 2: Manual Deployment

1. Build the site:
```bash
pnpm build
```

2. Create a `gh-pages` branch:
```bash
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/public/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

3. Enable GitHub Pages in repository settings (same as Option 1, step 3)

## Content Management

### Adding a New Project

1. Edit `client/src/lib/portfolio-data.ts`
2. Add a new entry to the `projects` array
3. The project will automatically appear on the Portfolio page

### Adding a New Partnership

1. Edit `client/src/lib/portfolio-data.ts`
2. Add a new entry to the `partnerships` array
3. The partnership will automatically appear on the Partnerships page

### Adding a New Blog Post

1. Edit `client/src/pages/Blog.tsx`
2. Add a new entry to the `blogPosts` array
3. Customize the blog post display as needed

### Adding a New Page

1. Create a new file in `client/src/pages/` (e.g., `MyPage.tsx`)
2. Add the route to `client/src/App.tsx`:

```typescript
import MyPage from "@/pages/MyPage";

function Router() {
  return (
    <Switch>
      {/* ... existing routes ... */}
      <Route path={"/my-page"} component={MyPage} />
    </Switch>
  );
}
```

3. Add the link to `client/src/components/layout/Navigation.tsx`

## Modular Architecture

This project is designed for easy expansion:

**Component Reusability**: All card components (`ProjectCard`, `PartnershipCard`, `VentureCard`) follow the same pattern and can be easily duplicated for new content types.

**Data-Driven**: Portfolio content is managed in a single `portfolio-data.ts` file, making it easy to add, update, or remove items without touching components.

**Page Templates**: Each page follows a consistent structure (Navigation → Header → Content → Footer), making it easy to create new pages.

**Styling System**: All colors, spacing, and typography are defined in `index.css` and `tailwind.config.ts`, ensuring consistency across the site.

## Extending the Site

### Adding a Skills Section
Create a new page component and use the `skills` array from `portfolio-data.ts`.

### Adding a Timeline
Create a timeline component and populate it with the `experience` array from `portfolio-data.ts`.

### Adding a Newsletter Signup
Add a form component to the footer or create a dedicated page.

### Adding a Dark Mode
The project is set up with theme support. Enable it in `App.tsx`:

```typescript
<ThemeProvider
  defaultTheme="light"
  switchable  // Enable theme switching
>
```

## Performance Optimization

- **Code Splitting**: Routes are automatically code-split by Vite
- **Image Optimization**: Use modern image formats (WebP) for faster loading
- **Caching**: Static assets in `public/` are cached aggressively
- **Minification**: Production builds are automatically minified

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Dev server not starting:**
```bash
pnpm install
pnpm dev
```

**Build errors:**
```bash
rm -rf node_modules dist
pnpm install
pnpm build
```

**GitHub Pages not updating:**
- Clear browser cache
- Wait a few minutes for GitHub to rebuild
- Check that the `gh-pages` branch exists in your repository

## License

MIT License - feel free to use this template for your portfolio.

## Support

For issues, questions, or suggestions, please open an issue on GitHub or contact the maintainer.

---

**Built with:**
- React 19
- TypeScript
- Tailwind CSS 4
- Vite
- Wouter (routing)
- Lucide React (icons)
