// app/learn/page.tsx
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
// Import from the blog page file where blogPostsData and getAllPosts are exported
import { getAllPosts } from "@/app/blog/[slug]/page"; // Adjust path if your project structure differs or if ESLint flags this

export default function LearnPage() {
  const postsToDisplay = getAllPosts();

  return (
    <main className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
              了解尼古丁替代方案
            </h1>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              基於實證研究，協助您做出明智決定
            </p>
          </div>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"> {/* Consider lg:grid-cols-3 if you have many posts */}
            {postsToDisplay.map((post) => (
              <Card key={post.id} className="shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-blue-700">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readingTime}分鐘閱讀</span>
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                    閱讀更多
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
