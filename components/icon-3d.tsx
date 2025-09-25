'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function AnimatedIcosahedron() {
  const wireframeRef = useRef<THREE.LineSegments>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = time * 0.3
      wireframeRef.current.rotation.y = time * 0.5
    }
  })

  return (
    <group>
      <lineSegments ref={wireframeRef}>
        <edgesGeometry args={[new THREE.IcosahedronGeometry(2, 0)]} />
        <lineBasicMaterial color="#ffffff" linewidth={2} />
      </lineSegments>
    </group>
  )
}

export function Icosahedron3D() {
  return (
    <div style={{ width: 300, height: 300 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        {/* Luz ambiente suave */}
        <ambientLight intensity={0.5} />

        {/* Luz direcional */}
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* Componente do icosaedro animado */}
        <AnimatedIcosahedron />
      </Canvas>
    </div>
  )
}
