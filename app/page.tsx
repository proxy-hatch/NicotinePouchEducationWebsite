import { getAllPosts } from "@/lib/content/blog"
import { Reveal } from "@/components/motion/reveal"
import { Hero } from "@/components/sections/home/hero"
import { ProblemSolution } from "@/components/sections/home/problem-solution"
import { Benefits } from "@/components/sections/home/benefits"
import { MediaCoverage } from "@/components/sections/home/media-coverage"
import { VideoEndorsement } from "@/components/sections/home/video-endorsement"
import { Faq } from "@/components/sections/home/faq"
import { BottomCta } from "@/components/sections/home/bottom-cta"
import { DisclaimerStrip } from "@/components/sections/home/disclaimer-strip"

export default function Home() {
  const posts = getAllPosts()

  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <ProblemSolution />
      <Benefits />
      <MediaCoverage />
      <VideoEndorsement />
      <Reveal>
        <Faq posts={posts} />
      </Reveal>
      <BottomCta />
      <DisclaimerStrip />
    </main>
  )
}
