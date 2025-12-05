# Portfolio Customization Guide

This guide walks you through customizing your portfolio to match your personal brand and content.

## Quick Start Customization

### 1. Update Your Information

**File**: `client/src/lib/portfolio-data.ts`

This is the central hub for all your portfolio content. Update:

```typescript
// Update your projects
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Your Amazing Project",
    description: "What this project does",
    longDescription: "Detailed explanation of the project",
    category: "current", // or "archived"
    technologies: ["React", "Node.js", "PostgreSQL"],
    link: "https://yourproject.com",
    github: "https://github.com/yourname/project",
    featured: true, // Shows on home page
    startDate: "2024-01",
    endDate: "2024-06", // Optional
  },
];

// Update your partnerships
export const partnerships: Partnership[] = [
  {
    id: "partner-1",
    name: "Organization Name",
    description: "What you do together",
    role: "Your Role",
    link: "https://organization.com",
    startDate: "2023-01",
  },
];

// Update your ventures
export const businessVentures: BusinessVenture[] = [
  {
    id: "venture-1",
    name: "Your Startup",
    description: "What your startup does",
    status: "active", // "active", "inactive", or "planning"
    role: "Founder",
    link: "https://yourventure.com",
  },
];

// Update your experience
export const experience: Experience[] = [
  {
    id: "exp-1",
    title: "Your Job Title",
    company: "Company Name",
    description: "What you did",
    startDate: "2022-01",
    endDate: "2023-12",
    technologies: ["Go", "Kubernetes"],
  },
];

// Update your skills
export const skills: Skill[] = [
  {
    category: "Backend",
    items: ["Go", "Python", "Java"],
  },
];
```

### 2. Update Navigation Links

**File**: `client/src/components/layout/Navigation.tsx`

Modify the `navLinks` array to customize your navigation:

```typescript
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/ventures", label: "Ventures" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  // Add custom links:
  { href: "/resume", label: "Resume" },
  { href: "/speaking", label: "Speaking" },
];
```

### 3. Update Footer Information

**File**: `client/src/components/layout/Footer.tsx`

Update the brand description and social links:

```typescript
const socialLinks = [
  { icon: Github, href: "https://github.com/yourname", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourname", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/yourname", label: "Twitter" },
  { icon: Mail, href: "mailto:your@email.com", label: "Email" },
];
```

### 4. Update Contact Information

**File**: `client/src/pages/Contact.tsx`

Update your contact details:

```typescript
<a href="mailto:your@email.com">your@email.com</a>
<a href="https://linkedin.com/in/yourname">Connect on LinkedIn</a>
<a href="https://github.com/yourname">View my repositories</a>
```

## Design Customization

### Color Scheme

**File**: `client/src/index.css`

The Warm Craft design uses these colors. Customize them in the `:root` section:

```css
:root {
  /* Warm Craft Design System */
  --primary: #C85A3A;              /* Terracotta - main accent */
  --secondary: #7BA68F;            /* Sage green */
  --background: #FBF7F0;           /* Warm cream */
  --foreground: #3D2817;           /* Warm brown text */
  --card: #FFFFFF;                 /* White cards */
  --accent: #C85A3A;               /* Same as primary */
  --muted: #E8DFD3;                /* Light beige */
}
```

**Alternative Color Palettes:**

Modern Blue:
```css
--primary: #0066FF;
--secondary: #00D9FF;
--background: #F5F7FA;
--foreground: #1A202C;
--accent: #0066FF;
```

Dark Elegant:
```css
--primary: #D4AF37;
--secondary: #C0C0C0;
--background: #1A1A1A;
--foreground: #E8E8E8;
--accent: #D4AF37;
```

### Typography

**File**: `client/index.html`

Change the fonts by updating the Google Fonts link:

```html
<!-- Current fonts -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />

<!-- Alternative: Modern Sans -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

<!-- Alternative: Elegant Serif -->
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

Then update `tailwind.config.ts`:

```typescript
theme: {
  fontFamily: {
    display: ["Your Display Font", "serif"],
    body: ["Your Body Font", "serif"],
    sans: ["Your Body Font", "serif"],
  },
}
```

### Spacing and Radius

**File**: `tailwind.config.ts`

Customize spacing and border radius:

```typescript
theme: {
  extend: {
    spacing: {
      // Add custom spacing values
    },
    borderRadius: {
      // Customize border radius
    },
  },
}
```

## Content Customization

### Home Page

**File**: `client/src/pages/Home.tsx`

- Update the hero heading and description
- Modify the CTA buttons
- Customize the skills section
- Add or remove sections

### Portfolio Page

**File**: `client/src/pages/Portfolio.tsx`

- Change the page title and description
- Modify filter options
- Customize project display

### Blog Page

**File**: `client/src/pages/Blog.tsx`

Add your blog posts to the `blogPosts` array:

```typescript
const blogPosts = [
  {
    id: 1,
    title: "Your Article Title",
    excerpt: "Short summary of the article",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Architecture",
  },
];
```

### Contact Page

**File**: `client/src/pages/Contact.tsx`

- Update the contact form fields
- Add or remove contact methods
- Customize the form submission handler

## Advanced Customization

### Adding a New Page Type

1. Create a new component in `client/src/pages/`:

```typescript
// client/src/pages/MyNewPage.tsx
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export default function MyNewPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Your content here */}
      </main>
      <Footer />
    </div>
  );
}
```

2. Add the route to `client/src/App.tsx`:

```typescript
import MyNewPage from "@/pages/MyNewPage";

function Router() {
  return (
    <Switch>
      {/* ... existing routes ... */}
      <Route path={"/my-new-page"} component={MyNewPage} />
    </Switch>
  );
}
```

3. Add the navigation link in `Navigation.tsx`

### Creating a Custom Card Component

Create a new component in `client/src/components/`:

```typescript
// client/src/components/portfolio/CustomCard.tsx
interface CustomCardProps {
  title: string;
  content: string;
}

export function CustomCard({ title, content }: CustomCardProps) {
  return (
    <div className="card-warm p-6 md:p-8 border border-warm-lightBeige">
      <h3 className="text-2xl font-bold text-foreground mb-4" style={{fontFamily: '"Playfair Display", serif'}}>
        {title}
      </h3>
      <p className="text-base text-foreground">{content}</p>
    </div>
  );
}
```

### Adding a Theme Toggle

**File**: `client/src/App.tsx`

Enable theme switching:

```typescript
<ThemeProvider
  defaultTheme="light"
  switchable  // Enable this
>
```

Then use the theme hook in components:

```typescript
import { useTheme } from "@/contexts/ThemeContext";

export function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}
```

## Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Lazy Load Images**: Use `loading="lazy"` on images
3. **Minimize Dependencies**: Only install packages you need
4. **Code Splitting**: Routes are automatically code-split by Vite

## SEO Optimization

Update the page title and meta tags in `client/index.html`:

```html
<title>Your Name - Software Engineer</title>
<meta name="description" content="Your professional summary" />
<meta name="keywords" content="software engineer, developer, portfolio" />
```

## Deployment Customization

### Custom Domain

1. Create a `CNAME` file in `client/public/`:

```
yourdomain.com
```

2. Update your domain's DNS settings to point to GitHub Pages

### Environment Variables

Create a `.env` file for any API keys or configuration:

```
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-analytics-id
```

## Troubleshooting

**Changes not showing up?**
- Clear your browser cache
- Restart the dev server: `pnpm dev`
- Check for TypeScript errors: `pnpm check`

**Styling issues?**
- Ensure Tailwind classes are spelled correctly
- Check that custom CSS is in `index.css`
- Restart the dev server after CSS changes

**Build errors?**
- Check for TypeScript errors: `pnpm check`
- Ensure all imports are correct
- Try: `rm -rf node_modules && pnpm install`

## Getting Help

- Check the main README.md for general information
- Review the component files for examples
- Refer to Tailwind CSS documentation: https://tailwindcss.com
- Check React documentation: https://react.dev
