import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Cylinder, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function Model() {
  const robotRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (robotRef.current) {
      // Gentle floating and bobbing
      robotRef.current.position.y = Math.sin(t * 2) * 0.1;
      robotRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
    }
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(t * 3) * 0.2 + 0.2;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = -Math.sin(t * 3) * 0.2 - 0.2;
    }
  });

  const bodyColor = "#1a1a1a";
  const accentColor = "#ffffff";
  const glowColor = "#cccccc";

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={robotRef} position={[0, -0.5, 0]} scale={1.2}>
        
        {/* Head */}
        <group position={[0, 1.4, 0]}>
          <RoundedBox args={[1.2, 1, 1]} radius={0.2} smoothness={4}>
            <meshStandardMaterial color={bodyColor} metalness={0.8} roughness={0.2} />
          </RoundedBox>
          
          {/* Face Screen */}
          <RoundedBox args={[0.9, 0.6, 0.1]} radius={0.05} position={[0, 0, 0.51]}>
            <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
          </RoundedBox>

          {/* Eyes (Glowing) */}
          <Sphere args={[0.1, 16, 16]} position={[-0.2, 0, 0.55]}>
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={2} />
          </Sphere>
          <Sphere args={[0.1, 16, 16]} position={[0.2, 0, 0.55]}>
            <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={2} />
          </Sphere>

          {/* Antenna */}
          <Cylinder args={[0.02, 0.02, 0.4]} position={[0, 0.7, 0]}>
            <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
          </Cylinder>
          <Sphere args={[0.08, 16, 16]} position={[0, 0.9, 0]}>
            <meshStandardMaterial color={glowColor} emissive={glowColor} emissiveIntensity={2} />
          </Sphere>
          
          {/* Ear modules */}
          <Cylinder args={[0.15, 0.15, 0.2]} position={[-0.65, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <meshStandardMaterial color={accentColor} metalness={0.5} roughness={0.2} />
          </Cylinder>
          <Cylinder args={[0.15, 0.15, 0.2]} position={[0.65, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <meshStandardMaterial color={accentColor} metalness={0.5} roughness={0.2} />
          </Cylinder>
        </group>

        {/* Neck */}
        <Cylinder args={[0.15, 0.2, 0.4]} position={[0, 0.8, 0]}>
          <meshStandardMaterial color="#444444" metalness={0.8} roughness={0.2} />
        </Cylinder>

        {/* Body */}
        <RoundedBox args={[1.1, 1.3, 0.9]} radius={0.2} position={[0, 0, 0]} smoothness={4}>
          <meshStandardMaterial color={bodyColor} metalness={0.8} roughness={0.2} />
        </RoundedBox>

        {/* Chest Display/Core */}
        <Sphere args={[0.25, 32, 32]} position={[0, 0.1, 0.45]}>
          <MeshDistortMaterial color={glowColor} emissive={glowColor} emissiveIntensity={2} distort={0.3} speed={3} />
        </Sphere>

        {/* Left Arm */}
        <group position={[-0.7, 0.3, 0]} ref={leftArmRef}>
          {/* Shoulder */}
          <Sphere args={[0.2, 16, 16]} position={[0, 0, 0]}>
            <meshStandardMaterial color={accentColor} metalness={0.6} roughness={0.2} />
          </Sphere>
          {/* Arm segment */}
          <RoundedBox args={[0.2, 0.8, 0.2]} radius={0.05} position={[-0.1, -0.4, 0]} rotation={[0, 0, -0.2]}>
            <meshStandardMaterial color={bodyColor} metalness={0.8} roughness={0.2} />
          </RoundedBox>
          {/* Hand */}
          <Sphere args={[0.15, 16, 16]} position={[-0.25, -0.85, 0]}>
            <meshStandardMaterial color={glowColor} emissive={glowColor} emissiveIntensity={1} />
          </Sphere>
        </group>

        {/* Right Arm */}
        <group position={[0.7, 0.3, 0]} ref={rightArmRef}>
          {/* Shoulder */}
          <Sphere args={[0.2, 16, 16]} position={[0, 0, 0]}>
            <meshStandardMaterial color={accentColor} metalness={0.6} roughness={0.2} />
          </Sphere>
          {/* Arm segment */}
          <RoundedBox args={[0.2, 0.8, 0.2]} radius={0.05} position={[0.1, -0.4, 0]} rotation={[0, 0, 0.2]}>
            <meshStandardMaterial color={bodyColor} metalness={0.8} roughness={0.2} />
          </RoundedBox>
          {/* Hand */}
          <Sphere args={[0.15, 16, 16]} position={[0.25, -0.85, 0]}>
            <meshStandardMaterial color={glowColor} emissive={glowColor} emissiveIntensity={1} />
          </Sphere>
        </group>

        {/* Base/Hover Engine instead of legs */}
        <group position={[0, -0.8, 0]}>
          <Cylinder args={[0.4, 0.3, 0.4]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#444444" metalness={0.8} roughness={0.2} />
          </Cylinder>
          {/* Thruster Glow */}
          <Cylinder args={[0.25, 0.35, 0.1]} position={[0, -0.25, 0]}>
            <meshStandardMaterial color={glowColor} emissive={glowColor} emissiveIntensity={3} transparent opacity={0.8} />
          </Cylinder>
        </group>

      </group>
    </Float>
  );
}
