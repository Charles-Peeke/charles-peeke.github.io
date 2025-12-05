# Quick Start Guide

Get your portfolio up and running in 5 minutes.

## Step 1: Clone and Install (2 minutes)

```bash
# Clone the repository
git clone https://github.com/yourusername/personal-portfolio-site.git
cd personal-portfolio-site

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Visit `http://localhost:3000` in your browser.

## Step 2: Update Your Information (2 minutes)

Edit `client/src/lib/portfolio-data.ts`:

```typescript
// Update your projects
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Your Project Name",
    description: "What you built",
    category: "current",
    technologies: ["React", "Node.js"],
    link: "https://yourproject.com",
    github: "https://github.com/yourname/project",
    featured: true,
    startDate: "2024-01",
  },
];

// Update your skills
export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["JavaScript", "Python", "Go"],
  },
];
```

## Step 3: Customize Your Brand (1 minute)

Edit `client/src/components/layout/Navigation.tsx` and `Footer.tsx`:

```typescript
// Update your social links
const socialLinks = [
  { icon: Github, href: "https://github.com/yourname", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourname", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/yourname", label: "Twitter" },
  { icon: Mail, href: "mailto:your@email.com", label: "Email" },
];
```

## Step 4: Deploy to GitHub Pages (1 minute)

### Option A: Automatic (Recommended)

1. Push your code to GitHub:

```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```

2. GitHub Actions will automatically build and deploy your site
3. Your portfolio is live at `https://yourusername.github.io/personal-portfolio-site`

### Option B: Manual

```bash
# Build the site
pnpm build

# Deploy to gh-pages branch
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/public/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

## Common Customizations

### Change Colors

Edit `client/src/index.css`:

```css
:root {
  --primary: #C85A3A;        /* Change this to your brand color */
  --secondary: #7BA68F;      /* Secondary color */
  --background: #FBF7F0;     /* Background color */
  --foreground: #3D2817;     /* Text color */
}
```

### Change Fonts

Edit `client/index.html`:

```html
<!-- Replace with your preferred fonts -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet" />
```

### Add a New Page

1. Create `client/src/pages/MyPage.tsx`
2. Add to `client/src/App.tsx`:

```typescript
import MyPage from "@/pages/MyPage";

<Route path={"/my-page"} component={MyPage} />
```

3. Add to `Navigation.tsx`:

```typescript
{ href: "/my-page", label: "My Page" }
```

## Project Structure at a Glance

```
client/src/
├── pages/          # Your page components
├── components/     # Reusable components
├── lib/           # portfolio-data.ts (your content)
├── App.tsx        # Routes
└── index.css      # Styling
```

## Next Steps

1. **Read CUSTOMIZATION.md** for detailed customization options
2. **Check README.md** for full documentation
3. **Explore the components** to understand the structure
4. **Add your content** to `portfolio-data.ts`

## Useful Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Check for TypeScript errors
pnpm check

# Format code
pnpm format
```

## Troubleshooting

**Port 3000 already in use?**
```bash
pnpm dev -- --port 3001
```

**Build failing?**
```bash
rm -rf node_modules dist
pnpm install
pnpm build
```

**Changes not showing?**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (Ctrl+C, then `pnpm dev`)

## Support

- Full documentation: See README.md
- Customization guide: See CUSTOMIZATION.md
- Issues? Check GitHub issues or create a new one

Happy building! 🚀
