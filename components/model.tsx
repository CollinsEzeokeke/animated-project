"use client";

import {  ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Plant } from "./test-two";

export function Pot() {
  return (
    <>
      <Canvas className="min-h-[60rem] w-full text-black" camera={{position: [-1.5, 0.8, 0.2], fov: 55}} shadows>
        <Suspense>
          <Scene />
        </Suspense>
      </Canvas>
    </>
  );
}

function Scene() {
  return (
    <group>
      {/* <OrbitControls /> */}
      {/* <Environment preset='city'/> */}
      
      {/* Scale the entire plant group */}
      <Plant 
        scale={0.2} 
        // position={[0, -0.5, 0]} // Adjust position if needed
      />
      
      {/* Main directional light for shadows */}
      <directionalLight
        position={[-1.9, 1.7, -1.3]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      />
      
      {/* Fill light to soften shadows */}
      <ambientLight intensity={0.3} />
      
      {/* Enhanced contact shadows */}
      <ContactShadows
        opacity={1}
        scale={4}
        blur={1}
        far={10}
        resolution={512}
        position={[-0.035, -0.02, -0.035]}
        color="#000000"
      />
    </group>
  );
}
