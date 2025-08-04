import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import meshUrl from "../assets/product/scene.gltf";

export function Product3D() {
  const gltf = useGLTF(meshUrl, true);
  return (
    <Canvas 
    camera={{ fov: 80, position: [45, 60, 100] }}>
      <OrbitControls enableZoom={true} minDistance={100} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[-2, 5, 3]} intensity={0.5} />
      <Suspense fallback={null}>
        <primitive object={gltf.scene} scale={1} />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload(meshUrl)