import { OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from "react";


const BoxComponent = () => {

  const gltf = useLoader(GLTFLoader, '/ring_test.gltf')

  return (
    <>
      <Suspense fallback={null}>
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
        <primitive object={gltf.scene} scale={0.1}/>
        <ambientLight />
        <directionalLight position={[5, 5, 5]} />
      </Suspense>
    </>
  )
}
export default BoxComponent
