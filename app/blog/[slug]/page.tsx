// app/blog/[slug]/page.tsx
import {CardFooter, CardContent, CardTitle, CardHeader, Card} from '@/components/ui/card';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowLeft, Clock} from 'lucide-react';
import {getAllPosts, getPostBySlug} from '@/lib/blog';
import Image from 'next/image'; // Import Next Image

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
            <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto">
                        <Link href="/learn" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
                            <ArrowLeft className="h-4 w-4 mr-2"/>
                            返回文章列表
                        </Link>

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

                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800 mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center text-gray-500 space-x-4">
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
            </section>

            {/* Blog Content */}
            <section className="w-full py-8 md:py-12 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-blue">
                        <div dangerouslySetInnerHTML={{__html: post.content}}/>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            <section className="w-full py-12 md:py-16 bg-gray-50">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-blue-800 mb-6">相關文章</h2>
                        {relatedPosts.length > 0 ? (
                            <div className="grid gap-6 sm:grid-cols-2">
                                {relatedPosts.map((relatedPost) => (
                                    <Card key={relatedPost.id} className="shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <CardHeader>
                                            <CardTitle className="text-blue-700 text-lg">{relatedPost.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <Link href={`/blog/${relatedPost.slug}`} className="text-blue-600 hover:underline">
                                                閱讀更多
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600">目前沒有相關文章。</p>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug, // Use the string slug for static path generation
    }));
}
