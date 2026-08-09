import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

const experienceCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    companyLabel: z.string(),
    company: z.string(),
    dateRange: z.string().optional(),
    functionLabel: z.string(),
    functions: z.array(z.string()),
    order: z.number()
  })
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
  schema: z.object({
    categoryLabel: z.string(),
    title: z.string(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string().optional(),
      text: z.string()
    })),
    descriptionLabel: z.string(),
    description: z.string(),
    functions: z.array(z.string()),
    order: z.number()
  })
});

const educationCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/education" }),
  schema: z.object({
    categoryLabel: z.string(),
    title: z.string(),
    details: z.array(z.object({
      label: z.string(),
      text: z.string(),
      url: z.string().optional()
    })),
    badge: z.string(),
    badgeClass: z.string(),
    order: z.number(),
    spacerAfter: z.boolean().optional()
  })
});

const skillsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/skills" }),
  schema: z.object({
    items: z.array(z.object({
      label1: z.string(),
      value1: z.string(),
      label2: z.string(),
      value2: z.string()
    })),
    order: z.number()
  })
});

export const collections = {
  experience: experienceCollection,
  projects: projectsCollection,
  education: educationCollection,
  skills: skillsCollection,
};
