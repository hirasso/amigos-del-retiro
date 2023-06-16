import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z
      .string()
      .max(
        40,
        "For optimum styling, please keep the title under 40 characters"
      ),
    author: z.string(),
    date: z.date(),
    description: z
      .string()
      .max(
        90,
        "For optimum styling, please keep the description under 80 characters"
      ),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

const events = defineCollection({
  type: "data",
  schema: z.object({
    title: z
      .string()
      .max(
        40,
        "For optimum styling, please keep the title under 40 characters"
      ),
    subtitle: z
      .string()
      .max(
        14,
        "For optimum styling, please keep the title under 14 characters"
      ),
    date: z.string(),
    description: z
      .string()
      .max(
        250,
        "For optimum styling, please keep the description under 260 characters"
      ),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    pdfUrl: z.string(),
  }),
});

export const collections = { blog, events };
