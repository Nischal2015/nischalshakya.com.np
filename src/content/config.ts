import { z, defineCollection } from 'astro:content';

const seoCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    robots: z.string(),
    description: z.string(),
    socialTitle: z.string().optional(),
    socialDescription: z.string().optional(),
    socialImage: z.string().optional(),
    socialImageAlt: z.string().optional(),
    ogType: z.enum(['website', 'article', 'profile']).optional(),
    ogUrl: z.string().optional(),
    twitterCreator: z.string().optional(),
    twitterCard: z.enum(['summary', 'summary_large_image']).optional(),
  }),
});

const articlesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    imageShow: z.string(),
    imageShowAlt: z.string(),
    imageSlide: z.string(),
    imageSlideAlt: z.string(),
  }),
});

export const collections = {
  seo: seoCollection,
  articles: articlesCollection,
};
