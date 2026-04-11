"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { motion } from "framer-motion"
import * as THREE from "three"
import { levels, getLevel } from "@/lib/levels"

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000
  return x - Math.floor(x)
}

interface FizzCanProps {
  balance: number
  level: number
  size?: "sm" | "md" | "lg" | "xl"
  animated?: boolean
}

function FizzCanMesh({ level, balance }: { level: number; balance: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)
  const liquidRef = useRef<THREE.Mesh>(null)

  const levelData = getLevel(level)

  const fillPercentage = useMemo(() => {
    if (level >= 8) return 0.95
    if (level <= 1) return Math.min(0.15, balance / 100)
    const nextLevel = levels.find(l => l.id === level + 1)
    if (!nextLevel) return 0.9
    const range = nextLevel.minBalance - levelData.minBalance
    const progress = ((balance - levelData.minBalance) / range) * 100
    return Math.min(0.9, Math.max(0.1, progress / 100 + (level - 1) * 0.1))
  }, [balance, level, levelData.minBalance])

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
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += 0.008
        if (positions[i * 3 + 1] > fillPercentage * 1.5 - 0.75) {
          positions[i * 3 + 1] = -0.75
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
    if (liquidRef.current) {
      liquidRef.current.scale.y = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.02 + fillPercentage * 0.5
    }
  })

  const color1 = level >= 6 ? "#a855f7" : level >= 4 ? "#8b5cf6" : "#00d4ff"
  const color2 = level >= 6 ? "#ec4899" : level >= 4 ? "#06b6d4" : "#8b5cf6"

  return (
    <group>
      {/* Can wireframe */}
      <mesh ref={meshRef}>
        <cylinderGeometry args={[0.4, 0.35, 1.5, 32, 1, true]} />
        <meshStandardMaterial
          color={color1}
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
          wireframe
        />
      </mesh>

      {/* Liquid fill */}
      <mesh ref={liquidRef} position={[0, -0.75 + fillPercentage * 0.75, 0]}>
        <cylinderGeometry args={[0.38, 0.33, fillPercentage * 1.5, 32]} />
        <meshStandardMaterial
          color={color1}
          transparent
          opacity={0.7}
          emissive={color1}
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Top ring */}
      <mesh position={[0, 0.75, 0]}>
        <torusGeometry args={[0.38, 0.05, 16, 32]} />
        <meshStandardMaterial
          color={color2}
          metalness={0.9}
          roughness={0.1}
          emissive={color2}
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Bottom ring */}
      <mesh position={[0, -0.75, 0]}>
        <torusGeometry args={[0.35, 0.03, 16, 32]} />
        <meshStandardMaterial
          color={color1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.025} color={color2} transparent opacity={0.8} sizeAttenuation />
      </points>

      {/* Level 5+ extra effects */}
      {level >= 5 && (
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color={color2} transparent opacity={0.05} />
        </mesh>
      )}

      {/* Level 7-8 legendary effects */}
      {level >= 7 && (
        <pointLight position={[0, 0.5, 0]} intensity={1} color={color2} distance={3} />
      )}
    </group>
  )
}

export function FizzCan({ balance, level, size = "lg", animated = true }: FizzCanProps) {
  const levelData = getLevel(level)
  const sizeMap = { sm: 100, md: 150, lg: 200, xl: 280 }

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="relative flex flex-col items-center"
    >
      {/* Glow background */}
      <div
        className="absolute rounded-full blur-3xl opacity-40"
        style={{
          width: sizeMap[size] * 1.5,
          height: sizeMap[size] * 1.5,
          background: `radial-gradient(circle, ${levelData.glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        style={{ width: sizeMap[size], height: sizeMap[size] * 1.5 }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#8b5cf6" />
        <FizzCanMesh level={level} balance={balance} />
      </Canvas>

      {/* Level badge */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-2 px-4 py-1.5 rounded-full text-xs font-bold border"
        style={{
          background: levelData.bgColor,
          borderColor: levelData.borderColor,
          color: levelData.color,
          boxShadow: `0 0 20px ${levelData.glowColor}`,
        }}
      >
        <span className="mr-1">{levelData.emoji}</span>
        LV.{level} {levelData.badge}
      </motion.div>
    </motion.div>
  )
}
