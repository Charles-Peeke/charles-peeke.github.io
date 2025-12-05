# Media & Visual Assets Guide

This guide explains how to add images, galleries, and media sections to showcase your projects, hobbies, and work visually.

## Quick Start

All project media is managed through the `portfolio-data.ts` file. Simply add image URLs to your project data, and they'll automatically display throughout the site.

## Adding Images to Projects

### 1. Project Thumbnail Image

Every project can have a thumbnail image displayed on the portfolio cards:

```typescript
const projects: Project[] = [
  {
    id: "project-1",
    title: "My Project",
    image: "/images/project-thumbnail.jpg", // Add here
    // ... other fields
  }
];
```

**Where to store images:**
- Place images in `/client/public/images/`
- Reference them with absolute paths: `/images/filename.jpg`

### 2. Project Gallery

Add a gallery of images that appears on the project detail page:

```typescript
{
  id: "project-1",
  // ... other fields
  gallery: [
    "/images/project-1-screenshot-1.png",
    "/images/project-1-screenshot-2.png",
    "/images/project-1-screenshot-3.png",
  ],
}
```

The gallery displays as:
- **Grid view** on the project detail page
- **Lightbox** when clicking any image (with navigation and counter)
- **Responsive** on mobile (2 columns) and desktop (3 columns)

### 3. Project Highlights

Rich media sections that appear between the overview and gallery. Supports images, videos, and text:

```typescript
{
  id: "project-1",
  // ... other fields
  highlights: [
    {
      type: "image",
      title: "Feature Name",
      content: "/images/feature-screenshot.jpg",
      description: "Description of what's shown",
      order: 1,
    },
    {
      type: "text",
      title: "Key Features",
      content: "Feature 1, Feature 2, Feature 3",
      description: "Optional description",
      order: 2,
    },
    {
      type: "video",
      title: "Demo Video",
      content: "/videos/demo.mp4",
      description: "Watch the project in action",
      order: 3,
    },
  ],
}
```

**Highlight Types:**

- **image**: Single image with alternating left/right layout
- **video**: Embedded video with play button overlay
- **text**: Rich text section with optional title and description
- **gallery**: Multiple images in a grid (comma-separated URLs in content)

**Layout Pattern:**
- Highlights alternate between left and right on desktop
- Stacked vertically on mobile
- Sorted by `order` field (ascending)

## File Organization

```
client/
  public/
    images/
      project-1-hero.jpg
      project-1-screenshot-1.png
      project-1-screenshot-2.png
      feature-diagram.svg
      ...
    videos/
      demo.mp4
      tutorial.webm
```

## Best Practices

### Image Optimization

1. **Use appropriate formats:**
   - `.jpg` for photographs and complex images
   - `.png` for screenshots and graphics with transparency
   - `.svg` for icons and diagrams
   - `.webp` for modern browsers (with `.jpg` fallback)

2. **Optimize file sizes:**
   - Compress images before uploading
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: < 500KB per image, < 100KB for thumbnails

3. **Responsive images:**
   - Provide images at 2x resolution for high-DPI displays
   - Use descriptive alt text for accessibility

### Naming Conventions

```
project-{id}-{section}-{number}.{ext}
project-1-hero.jpg
project-1-screenshot-1.png
project-1-architecture-diagram.svg
partnership-1-logo.png
```

### Content Strategy

1. **Hero/Thumbnail Image:**
   - Should represent the project at a glance
   - Aspect ratio: 16:9 or 4:3
   - Size: 1200x675px or larger

2. **Screenshots & Demos:**
   - Show key features and interfaces
   - Use consistent window/device frames
   - Include annotations if helpful

3. **Diagrams & Architecture:**
   - Use SVG for scalability
   - Keep visual hierarchy clear
   - Use your brand colors

4. **Gallery Images:**
   - 3-6 images per project works well
   - Mix of UI screenshots, diagrams, and results
   - Consistent aspect ratios for grid layout

## Example: Complete Project with Media

```typescript
{
  id: "hobby-photography",
  title: "Photography Portfolio",
  description: "A collection of landscape and portrait photography",
  longDescription: "Explore my photography work spanning travel, nature, and portraiture...",
  category: "current",
  technologies: ["Photography", "Adobe Lightroom", "Photoshop"],
  image: "/images/photography-hero.jpg",
  gallery: [
    "/images/photo-1-landscape.jpg",
    "/images/photo-2-portrait.jpg",
    "/images/photo-3-travel.jpg",
    "/images/photo-4-nature.jpg",
    "/images/photo-5-street.jpg",
    "/images/photo-6-detail.jpg",
  ],
  highlights: [
    {
      type: "image",
      title: "Landscape Photography",
      content: "/images/landscape-series-1.jpg",
      description: "Mountain ranges and scenic vistas captured across three continents",
      order: 1,
    },
    {
      type: "text",
      title: "Techniques & Approach",
      content: "Golden hour shooting, long exposure techniques, post-processing in Lightroom",
      order: 2,
    },
    {
      type: "gallery",
      title: "Portrait Series",
      content: "/images/portrait-1.jpg, /images/portrait-2.jpg, /images/portrait-3.jpg",
      description: "Character studies and environmental portraits",
      order: 3,
    },
  ],
}
```

## Troubleshooting

**Images not showing?**
- Check the file path starts with `/images/`
- Verify the file exists in `/client/public/images/`
- Check browser console for 404 errors

**Gallery not appearing?**
- Ensure `gallery` array is not empty
- Check image URLs are correct
- Verify project detail page is loading

**Lightbox not working?**
- Make sure you're clicking gallery images on the project detail page
- Check that JavaScript is enabled
- Try refreshing the page

## Advanced: Custom Image Components

To create custom image displays beyond the standard gallery:

1. Create a new component in `/client/src/components/portfolio/`
2. Import it in your project detail page
3. Add a new highlight type or create a custom section

Example:
```typescript
// client/src/components/portfolio/ImageCarousel.tsx
export function ImageCarousel({ images }: { images: string[] }) {
  // Your carousel implementation
}
```

Then use it in the project detail page:
```typescript
{project.gallery && <ImageCarousel images={project.gallery} />}
```

## Content Ideas for Different Project Types

### Software Projects
- Architecture diagrams
- UI screenshots
- Code snippets (as images)
- Demo videos
- Performance graphs

### Creative Projects (Art, Photography, Design)
- High-quality portfolio images
- Process/behind-the-scenes photos
- Before/after comparisons
- Detail shots

### Business Ventures
- Product mockups
- Team photos
- Office/workspace images
- Event photos

### Hobbies & Personal Projects
- Project progression photos
- Final results
- Process documentation
- Related lifestyle images
