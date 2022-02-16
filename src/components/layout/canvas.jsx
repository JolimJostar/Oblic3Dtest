import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'

const LControl = () => {
  
  return <OrbitControls enableZoom={false} enableRotate={true} enablePan={false} enableDamping={false}/>
}
const LCanvas = ({ children }) => {

  return (
    <Canvas
      mode='concurrent'
      style={{
        position: 'relative',
        width: 500,
        height: 500
      }}
    >
      <LControl />
      <Preload all />
      {children}
    </Canvas>
  )
}

export default LCanvas
