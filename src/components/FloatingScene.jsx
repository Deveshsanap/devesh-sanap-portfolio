import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function FloatingScene() {
  const meshRef = useRef();

  // A simple continuous rotation just to prove the 3D space is alive
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.2;
    meshRef.current.rotation.x += delta * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      {/* We'll replace this with your actual 3D model later */}
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial color="#6366f1" roughness={0.1} metalness={0.8} />
    </mesh>
  );
}