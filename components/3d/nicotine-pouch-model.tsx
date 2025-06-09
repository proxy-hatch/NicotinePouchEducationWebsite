"use client"

import { useRef, useState, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

type PouchModelProps = {}

function PouchModel(props: PouchModelProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  // State to hold the target rotation based on scroll
  const [targetRotationY, setTargetRotationY] = useState(0)

  // Initial tilt on X-axis for better visibility of the cylinder's top
  const initialRotationX = Math.PI * 0.1 // Approx 5.7 degrees

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Calculate scroll fraction (0 to 1)
      // Ensure document.documentElement is available (client-side effect)
      const maxScroll = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight
      const scrollFraction = maxScroll > 0 ? scrollY / maxScroll : 0

      // Map scroll fraction to rotation.
      // scrollFraction * Math.PI means a 180-degree turn over a full page scroll.
      // Adjust this multiplier to control sensitivity/speed.
      setTargetRotationY(scrollFraction * Math.PI * 0.8)
    }

    // Set initial rotation
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useFrame(() => {
    if (meshRef.current) {
      // Smoothly interpolate (lerp) to the target Y rotation
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.05)
      // Maintain the initial X-axis tilt
      meshRef.current.rotation.x = initialRotationX
    }
  })

  // Dimensions for the cylinder (nicotine pouch container)
  // Diameter: 2.75 units, Height: 0.78 units
  const radius = 2.75 / 2
  const height = 0.78

  return (
    <mesh ref={meshRef} {...props}>
      <cylinderGeometry args={[radius, radius, height, 64]} /> {/* radiusTop, radiusBottom, height, radialSegments */}
      <meshStandardMaterial color="#f5f5f5" roughness={0.35} metalness={0.15} />
    </mesh>
  )
}

export default function NicotinePouch3D() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0.8, 4.2], fov: 45 }} // Adjusted camera for better view
        gl={{ alpha: true }} // For transparent background
        style={{ background: "transparent" }}
        shadows // Enable shadows
      >
        <ambientLight intensity={1.8} />
        <directionalLight
          position={[4, 4, 3]}
          intensity={2.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* Add a subtle point light for highlights */}
        <pointLight position={[-3, 2, 3]} intensity={0.8} color="#ccddff" />
        <Suspense fallback={null}>
          {" "}
          {/* Suspense for any async operations within model if added later */}
          <PouchModel />
        </Suspense>
        {/* <OrbitControls /> */} {/* Uncomment to debug camera position and model view */}
      </Canvas>
    </div>
  )
}
