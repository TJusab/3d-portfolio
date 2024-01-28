import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Tree = () => {
  const tree = useGLTF("./cherry_blossom/scene.gltf")

  return (
    <mesh>
      <ambientLight intensity={2} groundColor="blue"/>
      <pointLight intensity={5} />
      <primitive 
        object={tree.scene}
        scale={0.5}
        position-y={-1.25}
        position-x={-0.75}
        rotation-y={0}
      />
    </mesh>
  )
}

const TreeCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
       }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Tree />
      </Suspense>
    </Canvas>
  )
}

export default TreeCanvas;