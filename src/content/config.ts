import { defineCollection, z } from "astro:content";

const working = defineCollection({
  schema: z.object({
    company: z.string(),
    position: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    description: z.string(),
    icon: z.string(),
    website: z.string().url().optional(),
    instagram: z.string().url().optional(),
    linkedin: z.string().url().optional(),
  }),
});

const education = defineCollection({
  schema: z.object({
    company: z.string(),
    position: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    description: z.string(),
    icon: z.string(),
    website: z.string().url().optional(),
    instagram: z.string().url().optional(),
    linkedin: z.string().url().optional(),
  }),
});

export const projects = defineCollection({
  schema: z.object({
    type: z.string(),
    name: z.string(),
    description: z.string(),
    skills: z.array(
      z.object({
        icon: z.string(),
        tooltip: z.string(),
      })
    ),
    image: z.string(),
    website: z.string().url().optional(),
    github: z.string().url().optional(),
  }),
});

export const collections = { working, education, projects };
