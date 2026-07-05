'use client'
import { animate, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export function CountUp({ to, suffix = '', duration = 1.5 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, {
      duration,
      onUpdate: (latest) => setValue(latest),
    })
    return () => controls.stop()
  }, [inView, reduce, to, duration])

  if (reduce) {
    return (
      <span ref={ref}>
        {to}
        {suffix}
      </span>
    )
  }

  return (
    <span ref={ref}>
      {Math.round(value)}
      {suffix}
    </span>
  )
}
