// app/sitemap.ts
import {MetadataRoute} from 'next';
import {getAllPosts} from '@/lib/content/blog';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    // Your static pages
    const staticPages = [
        {path: '/', lastModified: new Date('2024-12-01'), changeFrequency: 'weekly', priority: 1.0},
        {path: '/learn/', lastModified: new Date('2024-12-01'), changeFrequency: 'weekly', priority: 0.9},
        {path: '/research/', lastModified: new Date('2024-12-01'), changeFrequency: 'weekly', priority: 0.8},
        {path: '/vendors/', lastModified: new Date('2024-12-01'), changeFrequency: 'weekly', priority: 0.9},
        {path: '/contact/', lastModified: new Date('2024-12-01'), changeFrequency: 'monthly', priority: 0.6},
        {path: '/privacy-policy/', lastModified: new Date('2024-12-01'), changeFrequency: 'yearly', priority: 0.3},
        {path: '/legal-disclaimer/', lastModified: new Date('2024-12-01'), changeFrequency: 'yearly', priority: 0.3},
        {path: '/disclaimer/', lastModified: new Date('2024-12-01'), changeFrequency: 'yearly', priority: 0.3},
    ];

    // Add blog posts to sitemap
    const blogEntries = getAllPosts().map(post => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishDate),
        changeFrequency: 'monthly' as MetadataRoute.Sitemap[0]['changeFrequency'],
        priority: 0.8,
    }));

    const sitemapEntries = staticPages.map(page => ({
        url: `${siteUrl}${page.path === '/' ? '' : page.path}`, // Ensure no double slash for home page
        lastModified: page.lastModified,
        changeFrequency: page.changeFrequency as MetadataRoute.Sitemap[0]['changeFrequency'], // Type assertion
        priority: page.priority,
    }));

    return [
        ...sitemapEntries,
        ...blogEntries,
    ];
}
