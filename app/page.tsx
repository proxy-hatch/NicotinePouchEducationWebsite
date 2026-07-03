import HomeClient from "@/components/sections/home/home-client"
import { getAllPosts } from "@/lib/content/blog"

export default function Home() {
  const posts = getAllPosts()
  return <HomeClient posts={posts} />
}
