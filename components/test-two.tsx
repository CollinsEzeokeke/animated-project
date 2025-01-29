import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type PlantProps = {
    scale?: number | [number, number, number];
  };

type GLTFResult = GLTF & {
  nodes: {
    Vert: THREE.Mesh
    Circle: THREE.Mesh
    NurbsPath: THREE.Mesh
    NurbsPath001: THREE.Mesh
    NurbsPath002: THREE.Mesh
    NurbsPath003: THREE.Mesh
    NurbsPath004: THREE.Mesh
    NurbsPath005: THREE.Mesh
    NurbsPath006: THREE.Mesh
  }
  materials: {
    ['Material.003']: THREE.MeshPhysicalMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshPhysicalMaterial
  }
}

export function Plant(props: PlantProps ) {
  const { nodes, materials } = useGLTF('/result.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Vert"
        castShadow
        receiveShadow
        geometry={nodes.Vert.geometry}
        material={materials['Material.003']}
      />
      <mesh
        name="Circle"
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials['Material.002']}
        position={[0, 1.0458, 0]}
        scale={0.8783}
      />
      <mesh
        name="NurbsPath"
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath.geometry}
        material={materials['Material.004']}
        position={[0.7105, 1.8822, -0.0033]}
        rotation={[0, 0, 1.0124]}
        scale={0.5332}
      />
      <mesh
        name="NurbsPath001"
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath001.geometry}
        material={materials['Material.004']}
        position={[0.4844, 2.0248, -0.6441]}
        rotation={[0, 0.8575, 1.0124]}
        scale={0.6646}
      />
      <mesh
        name="NurbsPath002"
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath002.geometry}
        material={materials['Material.004']}
        position={[-0.4381, 1.8251, 0.1686]}
        rotation={[-Math.PI, -0.4022, -2.1292]}
        scale={0.5021}
      />
      <mesh
        name="NurbsPath003"
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath003.geometry}
        material={materials['Material.004']}
        position={[-0.6041, 2.0242, -0.5959]}
        rotation={[-Math.PI, 0.6, -2.1292]}
        scale={0.6646}
      />
      <mesh
        name="NurbsPath004"
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath004.geometry}
        material={materials['Material.004']}
        position={[0.3342, 2.0164, 0.7155]}
        rotation={[0, -1.202, 1.0124]}
        scale={0.6646}
      />
      <mesh
        name="NurbsPath005"
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath005.geometry}
        material={materials['Material.004']}
        position={[-0.6569, 1.5746, 0.125]}
        rotation={[-3.0854, -0.2586, -2.3421]}
        scale={0.3853}
      />
      <mesh
        name="NurbsPath006"
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath006.geometry}
        material={materials['Material.004']}
        position={[-0.4077, 1.5782, 0.4888]}
        rotation={[-3.0327, -0.7722, -2.2457]}
        scale={0.3853}
      />
    </group>
  )
}

useGLTF.preload('/result.gltf')
