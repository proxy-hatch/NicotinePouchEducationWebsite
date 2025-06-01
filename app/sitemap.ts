// app/sitemap.ts
import {MetadataRoute} from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    if (!process.env.SITE_URL) {
        console.error('SITE_URL environment variable is not set.');
        return [];
    }
    const siteUrl = process.env.SITE_URL;

    // Your static pages
    const staticPages = [
        {path: '/', lastModified: new Date('2024-12-01'), changeFrequency: 'weekly', priority: 1.0},
        {path: '/learn/', lastModified: new Date('2024-12-01'), changeFrequency: 'weekly', priority: 0.9},
        {path: '/research/', lastModified: new Date('2024-12-01'), changeFrequency: 'weekly', priority: 0.8},
        {path: '/vendors/', lastModified: new Date('2024-12-01'), changeFrequency: 'weekly', priority: 0.9},
        {path: '/faq/', lastModified: new Date('2024-12-01'), changeFrequency: 'monthly', priority: 0.7},
        {path: '/contact/', lastModified: new Date('2024-12-01'), changeFrequency: 'monthly', priority: 0.6},
        {path: '/privacy-policy/', lastModified: new Date('2024-12-01'), changeFrequency: 'yearly', priority: 0.3},
        {path: '/legal-disclaimer/', lastModified: new Date('2024-12-01'), changeFrequency: 'yearly', priority: 0.3},
        {path: '/disclaimer/', lastModified: new Date('2024-12-01'), changeFrequency: 'yearly', priority: 0.3},
    ];

    // If you have dynamic pages (e.g., blog posts, products), fetch them here
    // const dynamicPosts = await fetchPostsFromCMS();
    // const postEntries = dynamicPosts.map(post => ({
    //   url: `${siteUrl}/blog/${post.slug}`,
    //   lastModified: new Date(post.updatedAt),
    //   changeFrequency: 'daily',
    //   priority: 0.7,
    // }));

    const sitemapEntries = staticPages.map(page => ({
        url: `${siteUrl}${page.path === '/' ? '' : page.path}`, // Ensure no double slash for home page
        lastModified: page.lastModified,
        changeFrequency: page.changeFrequency as MetadataRoute.Sitemap[0]['changeFrequency'], // Type assertion
        priority: page.priority,
    }));

    return [
        ...sitemapEntries,
        // ...postEntries, // if you have dynamic ones
    ];
}