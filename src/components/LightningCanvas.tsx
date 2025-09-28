"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Lightning() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.absarc(-0.2, 0.82, 0.12, Math.PI, Math.PI / 2, true);
    shape.lineTo(0.2, 0.94);
    shape.absarc(0.2, 0.82, 0.12, Math.PI / 2, 0, true);
    shape.lineTo(0.1, 0.28);
    shape.lineTo(0.42, 0.28);
    shape.quadraticCurveTo(0.5, 0.28, 0.44, 0.14);
    shape.lineTo(-0.04, -0.82);
    shape.quadraticCurveTo(-0.08, -0.9, -0.18, -0.82);
    shape.lineTo(-0.12, -0.32);
    shape.lineTo(-0.44, -0.32);
    shape.quadraticCurveTo(-0.54, -0.32, -0.5, -0.18);
    shape.closePath();

    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.08,
      bevelEnabled: false,
      steps: 1,
    });

    geometry.center();

    return geometry;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = Math.sin(t * 0.6) * 0.25 + 0.3;
    meshRef.current.rotation.y = Math.cos(t * 0.4) * 0.35;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} scale={[0.85, 0.85, 0.55]}>
      <meshPhysicalMaterial
        color="#060606"
        metalness={0.95}
        roughness={0.08}
        clearcoat={1}
        clearcoatRoughness={0.35}
      />
    </mesh>
  );
}

export function LightningScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.35, 3.1], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        alpha: true,
      }}
    >
      <ambientLight intensity={0.22} />
      <directionalLight position={[2.2, 1.8, 1.3]} intensity={1.4} />
      <directionalLight position={[-2.5, 1.2, 1.6]} intensity={1.1} />
      <spotLight
        position={[0, 2.6, 1.2]}
        angle={0.7}
        penumbra={0.6}
        intensity={1.1}
        decay={1.2}
      />
      <pointLight position={[0, -1.2, 1]} intensity={0.55} />
      <Lightning />
    </Canvas>
  );
}

export default function LightningCanvas() {
  return (
    <div className="h-full w-full overflow-hidden rounded-[3rem] ">
      <LightningScene />
    </div>
  );
}
