/**
 * Portfolio Data Structure
 * 
 * This file defines the data models and sample data for the portfolio.
 * Modify this file to add/update projects, partnerships, and other portfolio items.
 */

export interface ProjectHighlight {
  type: "image" | "video" | "text" | "gallery";
  title?: string;
  content: string; // URL for media, text content for text type
  description?: string;
  order: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "current" | "archived";
  technologies: string[];
  link?: string;
  github?: string;
  image?: string; // Hero/thumbnail image
  gallery?: string[]; // Array of image URLs for gallery
  featured?: boolean;
  startDate?: string;
  endDate?: string;
  highlights?: ProjectHighlight[]; // Media sections (images, videos, etc.)
}

export interface Partnership {
  id: string;
  name: string;
  description: string;
  role: string;
  link?: string;
  logo?: string;
  startDate?: string;
}

export interface BusinessVenture {
  id: string;
  name: string;
  description: string;
  status: "active" | "inactive" | "planning";
  role: string;
  link?: string;
  logo?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate?: string;
  technologies?: string[];
}

export interface SkillItem {
  name: string;
  proficiency: "expert" | "advanced" | "intermediate";
  icon?: string;
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

// Sample Projects
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Real-Time Collaboration Platform",
    description: "A web-based platform enabling real-time collaboration for distributed teams.",
    longDescription: "Built a real-time collaboration platform using WebSockets and operational transformation algorithms. Supports concurrent editing, presence awareness, and conflict resolution.",
    category: "current",
    technologies: ["React", "Node.js", "WebSocket", "MongoDB", "Redis"],
    link: "https://example.com",
    github: "https://github.com/example/collab-platform",
    featured: true,
    startDate: "2023-01",
    gallery: [
      "/images/placeholder-1.jpg",
      "/images/placeholder-2.jpg",
      "/images/placeholder-3.jpg",
    ],
    highlights: [
      {
        type: "image",
        title: "Real-time Editor Interface",
        content: "/images/placeholder-1.jpg",
        description: "Multi-user editor with live cursor tracking and presence awareness",
        order: 1,
      },
      {
        type: "text",
        title: "Key Features",
        content: "Concurrent editing with conflict resolution, Real-time presence awareness, Automatic synchronization across devices, Rich text formatting support",
        order: 2,
      },
      {
        type: "image",
        title: "Collaboration Dashboard",
        content: "/images/placeholder-2.jpg",
        description: "Team collaboration metrics and activity tracking",
        order: 3,
      },
    ],
  },
  {
    id: "project-2",
    title: "Machine Learning Pipeline Orchestrator",
    description: "Distributed system for managing and orchestrating ML training pipelines.",
    longDescription: "Designed and implemented a fault-tolerant orchestration system for ML pipelines with automatic scaling, monitoring, and resource optimization.",
    category: "current",
    technologies: ["Python", "Kubernetes", "Docker", "Apache Airflow", "TensorFlow"],
    github: "https://github.com/example/ml-orchestrator",
    featured: true,
    startDate: "2022-06",
    gallery: [
      "/images/placeholder-1.jpg",
      "/images/placeholder-2.jpg",
    ],
    highlights: [
      {
        type: "image",
        title: "Pipeline Architecture",
        content: "/images/placeholder-1.jpg",
        description: "Distributed ML pipeline orchestration with Kubernetes",
        order: 1,
      },
      {
        type: "image",
        title: "Monitoring Dashboard",
        content: "/images/placeholder-2.jpg",
        description: "Real-time monitoring and metrics for pipeline execution",
        order: 2,
      },
    ],
  },
  {
    id: "project-3",
    title: "Legacy System Migration Framework",
    description: "Framework for safely migrating monolithic applications to microservices.",
    longDescription: "Created a comprehensive framework with automated testing, gradual rollout capabilities, and rollback mechanisms for enterprise system migrations.",
    category: "archived",
    technologies: ["Java", "Spring Boot", "Docker", "Kubernetes", "PostgreSQL"],
    startDate: "2021-03",
    endDate: "2022-12",
    gallery: [
      "/images/placeholder-1.jpg",
      "/images/placeholder-2.jpg",
    ],
    highlights: [
      {
        type: "image",
        title: "Migration Strategy",
        content: "/images/placeholder-1.jpg",
        description: "Phased migration approach with rollback capabilities",
        order: 1,
      },
    ],
  },
];

// Sample Partnerships
export const partnerships: Partnership[] = [
  {
    id: "partner-1",
    name: "Tech Innovation Lab",
    description: "Collaborating on open-source infrastructure projects.",
    role: "Technical Advisor",
    link: "https://example.com",
    startDate: "2023-01",
  },
  {
    id: "partner-2",
    name: "Cloud Architecture Consortium",
    description: "Contributing to cloud-native best practices and standards.",
    role: "Working Group Member",
    link: "https://example.com",
    startDate: "2022-06",
  },
];

// Sample Business Ventures
export const businessVentures: BusinessVenture[] = [
  {
    id: "venture-1",
    name: "DevOps Consulting",
    description: "Providing DevOps and infrastructure consulting services to startups.",
    status: "active",
    role: "Founder",
    link: "https://example.com",
  },
  {
    id: "venture-2",
    name: "Open Source Foundation",
    description: "Supporting and funding open-source software development.",
    status: "planning",
    role: "Co-Founder",
  },
];

// Sample Experience
export const experience: Experience[] = [
  {
    id: "exp-1",
    title: "Senior Software Engineer",
    company: "Tech Corp",
    description: "Led architecture and development of distributed systems.",
    startDate: "2021-01",
    technologies: ["Go", "Kubernetes", "gRPC", "PostgreSQL"],
  },
  {
    id: "exp-2",
    title: "Software Engineer",
    company: "StartUp Inc",
    description: "Built full-stack web applications and APIs.",
    startDate: "2019-06",
    endDate: "2020-12",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
];

// Sample Skills
export const skills: Skill[] = [
  {
    category: "Backend",
    items: [
      { name: "Go", proficiency: "expert" },
      { name: "Python", proficiency: "expert" },
      { name: "Java", proficiency: "advanced" },
      { name: "Node.js", proficiency: "expert" },
      { name: "Rust", proficiency: "intermediate" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", proficiency: "expert" },
      { name: "TypeScript", proficiency: "expert" },
      { name: "Tailwind CSS", proficiency: "advanced" },
      { name: "Next.js", proficiency: "advanced" },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    items: [
      { name: "Kubernetes", proficiency: "expert" },
      { name: "Docker", proficiency: "expert" },
      { name: "AWS", proficiency: "advanced" },
      { name: "GCP", proficiency: "advanced" },
      { name: "Terraform", proficiency: "advanced" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", proficiency: "expert" },
      { name: "MongoDB", proficiency: "advanced" },
      { name: "Redis", proficiency: "advanced" },
      { name: "Elasticsearch", proficiency: "intermediate" },
    ],
  },
];
