import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        docs: defineCollection({
            type: 'page',
            source: '**/*.{md,yml,yaml}',
            schema: z.object({
                releases: z.array(z.number()).optional(), // (Repo Index Page Only) A list of official release versions
                title: z.string().optional(), // Title for the system module document
                description: z.string().optional(), // Optional Page Description
                lastUpdate: z.string(), // Last Page Update
                repo: z.string(), // repository the document belongs to
                module: z.string(), // system module within the repository
                version: z.number().optional(), // (Snapshot Only) Release version
                since: z.number().optional(), // Version this module was introduced in
                until: z.number().optional(), // Version this module was removed in
                tags: z.array(z.string()).optional(), // Optional search tags for discoverability
                removes: z.array(z.string()).optional(), // Optional list of removed sections
            })
        }),
        "release-notes": defineCollection({
            type: 'page',
            source: '**/*.{md,yml,yaml}',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                lastUpdate: z.string(),
            }),
        }),
    }
})