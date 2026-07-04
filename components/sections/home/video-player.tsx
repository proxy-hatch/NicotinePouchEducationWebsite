"use client"

import { useState, useRef, useEffect } from "react"

export function VideoPlayer() {
  const [showPlayButton, setShowPlayButton] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setShowPlayButton(false)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setShowPlayButton(false)
    const handlePause = () => {
      if (video.currentTime > 0 && !video.ended) {
        setShowPlayButton(true)
      }
    }
    const handleEnded = () => setShowPlayButton(true)

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("ended", handleEnded)

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  return (
    <div className="aspect-video bg-neutral-900 rounded-xl overflow-hidden shadow-lg mb-6 relative group">
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        controls
        preload="none"
        poster="/video/jfk_jr_nicotine_poster.jpg"
        aria-label="JFK Jr. 談論尼古丁的益處"
      >
        {/* WebM for modern browsers - best compression */}
        <source src="/video/jfk_jr_nicotine_endorsement.webm" type="video/webm" />

        {/* Multiple MP4 qualities - browser picks based on connection */}
        <source src="/video/jfk_jr_nicotine_480p.mp4" type="video/mp4" media="(max-width: 640px)" />
        <source src="/video/jfk_jr_nicotine_endorsement.mp4" type="video/mp4" />

        <p className="text-white text-center p-4">
          您的瀏覽器不支援影片播放。請升級您的瀏覽器或
          <a href="/video/jfk_jr_nicotine_endorsement.mp4" className="text-accent underline" download>
            直接下載影片
          </a>
        </p>
      </video>

      {/* Custom Play Button Overlay */}
      {showPlayButton && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-200 hover:opacity-90"
          onClick={handlePlayClick}
        >
          <div className="bg-black bg-opacity-40 w-full h-full absolute inset-0"></div>
          <div className="relative z-10 bg-white bg-opacity-90 rounded-full p-6 md:p-8 shadow-2xl transform transition-transform hover:scale-110">
            <svg
              className="w-16 h-16 md:w-20 md:h-20 text-neutral-900"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}
