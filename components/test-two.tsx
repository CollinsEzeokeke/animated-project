"use client";

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useState, useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
gsap.registerPlugin(ScrollTrigger);

type PlantProps = {
  scale?: number | [number, number, number];
};

type GLTFResult = GLTF & {
  nodes: {
    Vert: THREE.Mesh;
    Circle: THREE.Mesh;
    NurbsPath: THREE.Mesh;
    NurbsPath001: THREE.Mesh;
    NurbsPath002: THREE.Mesh;
    NurbsPath003: THREE.Mesh;
    NurbsPath004: THREE.Mesh;
    NurbsPath005: THREE.Mesh;
    NurbsPath006: THREE.Mesh;
  };
  materials: {
    ["Material.003"]: THREE.MeshPhysicalMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshPhysicalMaterial;
  };
};

export function Plant(props: PlantProps) {
  const [scrollingPercent, setScrollPercent] = useState<number>(0);
  const groupRef = useRef<THREE.Group>(null);
  const mesh1Ref = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);
  const mesh3Ref = useRef<THREE.Mesh>(null);
  const mesh4Ref = useRef<THREE.Mesh>(null);
  const mesh5Ref = useRef<THREE.Mesh>(null);
  const mesh6Ref = useRef<THREE.Mesh>(null);
  const mesh7Ref = useRef<THREE.Mesh>(null);
  const mesh8Ref = useRef<THREE.Mesh>(null);
  const mesh9Ref = useRef<THREE.Mesh>(null);

  useEffect(() => {
    // initially hidding the meshes of the different parts of the plant
    if (mesh3Ref.current) mesh3Ref.current.visible = false;
    if (mesh4Ref.current) mesh4Ref.current.visible = false;
    if (mesh5Ref.current) mesh5Ref.current.visible = false;
    if (mesh6Ref.current) mesh6Ref.current.visible = false;
    if (mesh7Ref.current) mesh7Ref.current.visible = false;
    if (mesh8Ref.current) mesh8Ref.current.visible = false;
    if (mesh9Ref.current) mesh9Ref.current.visible = false;
    if (!groupRef.current) return;
    if (!mesh3Ref.current) return;
    if (!mesh4Ref.current) return;
    if (!mesh5Ref.current) return;
    if (!mesh6Ref.current) return;
    if (!mesh7Ref.current) return;
    if (!mesh8Ref.current) return;
    if (!mesh9Ref.current) return;

    const handleScroll = () => {
      if (!groupRef.current) return;
      const ScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = ScrollY / (docHeight - winHeight);
      setScrollPercent(scrollPercent * 100);
      return scrollPercent * 100;
    };
    window.addEventListener("scroll", handleScroll);
    const timeline = gsap.timeline();
    const percentScrolled = handleScroll() || 0;
    console.log("this is the percent scrolled", percentScrolled);
    if (percentScrolled > 10 && mesh3Ref.current.visible === true) {
      {
        timeline.fromTo(
          mesh8Ref.current.position,
          { opacity: 0, x: -0.4077, y: 1, z: 0.0125 },
          {
            opacity: 1,
            x: -0.6569,
            y: 1.5746,
            z: 0.125,
            duration: 2.5,
            ease: "power1.in",
          }
        );
      }
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      timeline.kill();
    };
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    if (!mesh8Ref.current) return;
    if (scrollingPercent > 10) {
      const group = groupRef.current;
      group.rotation.y += 0.01;
      mesh8Ref.current.visible = true;
    }
  });

  console.log("this is my current postion", groupRef.current?.position);
  console.log("");
  console.log("");
  console.log("");
  console.log("this is the scroll percent", scrollingPercent * 100);
  console.log("");
  console.log("");
  console.log("");

  const { nodes, materials } = useGLTF("/result.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null} ref={groupRef}>
      <mesh
        name="Vert"
        castShadow
        receiveShadow
        geometry={nodes.Vert.geometry}
        material={materials["Material.003"]}
        ref={mesh1Ref}
      />
      <mesh
        name="Circle"
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials["Material.002"]}
        position={[0, 1.0458, 0]}
        scale={0.8783}
        ref={mesh2Ref}
      />
      <mesh
        name="NurbsPath"
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath.geometry}
        material={materials["Material.004"]}
        position={[0.7105, 1.8822, -0.0033]}
        rotation={[0, 0, 1.0124]}
        scale={0.5332}
        ref={mesh3Ref}
      />
      <mesh
        name="NurbsPath001"
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath001.geometry}
        material={materials["Material.004"]}
        position={[0.4844, 2.0248, -0.6441]}
        rotation={[0, 0.8575, 1.0124]}
        scale={0.6646}
        ref={mesh4Ref}
      />
      <mesh
        name="NurbsPath002"
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath002.geometry}
        material={materials["Material.004"]}
        position={[-0.4381, 1.8251, 0.1686]}
        rotation={[-Math.PI, -0.4022, -2.1292]}
        scale={0.5021}
        ref={mesh5Ref}
      />
      <mesh
        name="NurbsPath003"
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath003.geometry}
        material={materials["Material.004"]}
        position={[-0.6041, 2.0242, -0.5959]}
        rotation={[-Math.PI, 0.6, -2.1292]}
        scale={0.6646}
        ref={mesh6Ref}
      />
      <mesh
        name="NurbsPath004"
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath004.geometry}
        material={materials["Material.004"]}
        position={[0.3342, 2.0164, 0.7155]}
        rotation={[0, -1.202, 1.0124]}
        scale={0.6646}
        ref={mesh7Ref}
      />
      <mesh
        name="NurbsPath005"
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath005.geometry}
        material={materials["Material.004"]}
        position={[-0.6569, 1.5746, 0.125]}
        rotation={[-3.0854, -0.2586, -2.3421]}
        scale={0.3853}
        ref={mesh8Ref}
      />
      <mesh
        name="NurbsPath006"
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath006.geometry}
        material={materials["Material.004"]}
        position={[-0.4077, 1.5782, 0.4888]}
        rotation={[-3.0327, -0.7722, -2.2457]}
        scale={0.3853}
        ref={mesh9Ref}
      />
    </group>
  );
}

useGLTF.preload("/result.gltf");
