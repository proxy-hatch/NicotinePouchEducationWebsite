// app/blog/[slug]/page.tsx
import {CardContent, CardTitle, CardHeader, Card} from '@/components/ui/card';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowLeft, Clock} from 'lucide-react';
import {getAllPosts, getPostBySlug} from '@/lib/content/blog';
import Image from 'next/image';
import {Section} from '@/components/primitives/section';
import {Reveal} from '@/components/motion/reveal';
import {Stagger, StaggerItem} from '@/components/motion/stagger';

function BackToList() {
    return (
        <Link
            href="/learn"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-sm transition-all hover:border-primary/40 hover:text-primary hover:shadow"
        >
            <ArrowLeft className="h-4 w-4"/>
            返回文章列表
        </Link>
    );
}

export default async function BlogPostPage({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;

    // params.slug is the string slug from the URL
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getAllPosts()
        .filter((relatedPost) => relatedPost.slug !== slug) // Filter by slug, not ID
        .slice(0, 2); // Get 2 related posts

    return (
        <main className="flex flex-col min-h-screen" lang="zh-TW">
            {/* Page Header */}
            <div className="hero-gradient w-full pt-12 md:pt-16 pb-8 md:pb-10">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-6">
                            <BackToList/>
                        </div>

                        {post.heroImageUrl && (
                            <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src={post.heroImageUrl || '/placeholder.svg'}
                                    alt={post.heroImageAlt}
                                    width={1200}
                                    height={630}
                                    className="w-full h-auto object-cover"
                                    priority // Prioritize loading for LCP
                                />
                            </div>
                        )}

                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-ink mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center text-muted-foreground space-x-4">
                            <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1"/>
                                <span>{post.readingTime}分鐘閱讀</span>
                            </div>
                            <span>•</span>
                            <div>{post.author}</div>
                            <span>•</span>
                            <div>{post.publishDate}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <section>
                <div className="container pt-8 pb-12 md:pt-10 md:pb-16">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-ink prose-a:text-accent prose-strong:text-ink [&>div>:first-child]:mt-0">
                        <div dangerouslySetInnerHTML={{__html: post.contentHtml}}/>
                    </div>
                    <div className="max-w-3xl mx-auto mt-10">
                        <BackToList/>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            <Section tone="surface">
                <div className="max-w-3xl mx-auto">
                    <Reveal>
                        <h2 className="text-2xl font-bold text-ink mb-6">相關文章</h2>
                    </Reveal>
                    {relatedPosts.length > 0 ? (
                        <Stagger className="grid gap-6 sm:grid-cols-2">
                            {relatedPosts.map((relatedPost) => (
                                <StaggerItem key={relatedPost.slug} className="h-full">
                                    <Link href={`/blog/${relatedPost.slug}`} className="group block h-full">
                                        <Card className="h-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                            <CardHeader>
                                                <CardTitle className="text-ink text-lg transition-colors group-hover:text-primary">
                                                    {relatedPost.title}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground text-sm line-clamp-2">{relatedPost.excerpt}</p>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </StaggerItem>
                            ))}
                        </Stagger>
                    ) : (
                        <p className="text-muted-foreground">目前沒有相關文章。</p>
                    )}
                </div>
            </Section>
        </main>
    );
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug, // Use the string slug for static path generation
    }));
}
