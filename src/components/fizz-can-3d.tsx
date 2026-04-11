"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { motion } from "framer-motion"
import * as THREE from "three"

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000
  return x - Math.floor(x)
}

interface FizzCan3DProps {
  balance: number
  level: number
  size?: "sm" | "md" | "lg" | "xl"
}

function FizzCanMesh({ level, balance }: { level: number; balance: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  const fillPercentage = useMemo(() => {
    if (level >= 8) return 0.95
    if (level <= 1) return Math.min(0.15, balance / 100)
    const levelThresholds = [0, 100, 400, 800, 1500, 3000, 6000, 12000]
    const current = levelThresholds[level - 1] || 0
    const next = levelThresholds[level] || 12000
    const progress = ((balance - current) / (next - current)) * 100
    return Math.min(0.9, Math.max(0.2, progress / 100 + (level - 1) * 0.1))
  }, [balance, level])

  const particleCount = level >= 4 ? 50 : level >= 2 ? 30 : 15
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const angle = seededRandom(i * 1) * Math.PI * 2
      const radius = 0.2 + seededRandom(i * 2) * 0.15
      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = seededRandom(i * 3) * fillPercentage * 1.5 - 0.75
      positions[i * 3 + 2] = Math.sin(angle) * radius
    }
    return positions
  }, [particleCount, fillPercentage])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += 0.01
        if (positions[i * 3 + 1] > fillPercentage * 1.5 - 0.75) {
          positions[i * 3 + 1] = -0.75
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  const color1 = level >= 6 ? "#a855f7" : level >= 4 ? "#8b5cf6" : "#00d4ff"
  const color2 = level >= 6 ? "#ec4899" : level >= 4 ? "#06b6d4" : "#8b5cf6"

  return (
    <group>
      <mesh ref={meshRef}>
        <cylinderGeometry args={[0.4, 0.35, 1.5, 32, 1, true]} />
        <meshStandardMaterial
          color={color1}
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
          wireframe
        />
      </mesh>
      
      <mesh position={[0, -0.75 + fillPercentage * 1.5, 0]}>
        <cylinderGeometry args={[0.38, 0.33, fillPercentage * 1.5, 32]} />
        <meshStandardMaterial
          color={color1}
          transparent
          opacity={0.6}
          emissive={color1}
          emissiveIntensity={0.3}
        />
      </mesh>

      <mesh position={[0, 0.75, 0]}>
        <torusGeometry args={[0.38, 0.05, 16, 32]} />
        <meshStandardMaterial
          color={color2}
          metalness={0.8}
          roughness={0.2}
          emissive={color2}
          emissiveIntensity={0.5}
        />
      </mesh>

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color={color2}
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
    </group>
  )
}

export function FizzCan3D({ balance, level, size = "md" }: FizzCan3DProps) {
  const sizeMap = {
    sm: 120,
    md: 180,
    lg: 240,
    xl: 320,
  }

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="relative"
    >
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-30"
        style={{
          background: `radial-gradient(circle, ${
            level >= 6 ? "#a855f7" : level >= 4 ? "#8b5cf6" : "#00d4ff"
          } 0%, transparent 70%)`,
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        style={{ width: sizeMap[size], height: sizeMap[size] }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <FizzCanMesh level={level} balance={balance} />
      </Canvas>
    </motion.div>
  )
}
