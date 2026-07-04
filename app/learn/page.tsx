// app/learn/page.tsx
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"
import { BlogPost, getAllPosts } from "@/lib/content/blog"
import { PageHeader } from "@/components/primitives/page-header"
import { Section } from "@/components/primitives/section"
import { Stagger, StaggerItem } from "@/components/motion/stagger"

export default function LearnPage() {
  const postsToDisplay: BlogPost[] = getAllPosts()

  return (
    <main className="flex flex-col min-h-screen">
      <PageHeader title="了解尼古丁替代方案" subtitle="基於實證研究，協助您做出明智決定" />

      <Section>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {postsToDisplay.map((post) => (
            <StaggerItem key={post.slug} className="flex flex-col h-full">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-ink">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center mt-auto">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readingTime}分鐘閱讀</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-accent hover:underline">
                    閱讀更多
                  </Link>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </main>
  )
}
