'use client';

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function TorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.5}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color="#00f3ff"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Icosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.z += 0.008;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[3, 0, -2]} scale={0.8}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#bc13fe"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function Octahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.015;
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} position={[-3, 1, -1]} scale={0.6}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#ff0055"
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

function Particles3D() {
  const [seed] = useState(() => Math.random() * 10000);
  
  const points = useMemo(() => {
    let s = seed;
    const positions = new Float32Array(300 * 3);
    const seededRandom = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
    for (let i = 0; i < 300; i++) {
      positions[i * 3] = (seededRandom() - 0.5) * 15;
      positions[i * 3 + 1] = (seededRandom() - 0.5) * 15;
      positions[i * 3 + 2] = (seededRandom() - 0.5) * 10;
    }
    return positions;
  }, [seed]);

  const colors = useMemo(() => {
    let s = seed + 1000;
    const colorArray = new Float32Array(300 * 3);
    const color = new THREE.Color();
    const colorPalette = ['#00f3ff', '#bc13fe', '#ff0055'];
    const seededRandom = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
    for (let i = 0; i < 300; i++) {
      const c = colorPalette[Math.floor(seededRandom() * 3)];
      color.set(c);
      colorArray[i * 3] = color.r;
      colorArray[i * 3 + 1] = color.g;
      colorArray[i * 3 + 2] = color.b;
    }
    return colorArray;
  }, [seed]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={300} array={points} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={300} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

function Rings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ring1Ref.current) ring1Ref.current.rotation.z += 0.01;
    if (ring2Ref.current) ring2Ref.current.rotation.z -= 0.008;
    if (ring3Ref.current) ring3Ref.current.rotation.x += 0.005;
  });

  return (
    <>
      <mesh ref={ring1Ref} position={[0, 0, -1]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00f3ff" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring2Ref} position={[0, 0, -1]} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[3, 0.015, 16, 100]} />
        <meshBasicMaterial color="#bc13fe" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring3Ref} position={[0, 0, -1]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[3.5, 0.01, 16, 100]} />
        <meshBasicMaterial color="#ff0055" transparent opacity={0.2} />
      </mesh>
    </>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bc13fe" />
        <TorusKnot />
        <Icosahedron />
        <Octahedron />
        <Rings />
        <Particles3D />
      </Canvas>
    </div>
  );
}
