import { Canvas } from '@react-three/fiber'
import { Fisheye, CameraControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { Level, Sudo, Camera, Cactus, Box } from './Scene'
import { useState, useRef, useEffect } from 'react'

const defaultCameraCords = [30, 20, 10]

export default function App() {
  const [target, setTarget] = useState(null)
  const [targetCamera, setTargetCamera] = useState(defaultCameraCords)
  const cameraControlsRef = useRef() // Реф для управления камерой

  const handleButtonClick = (cameraPosition, objectPosition) => {
    setTarget(objectPosition)
    setTargetCamera(cameraPosition) // Устанавливаем новую цель для камеры
  }
  window.handleButtonClick = handleButtonClick

  useEffect(() => {
    if (cameraControlsRef.current) {
      cameraControlsRef.current?.setLookAt(...targetCamera, ...target, true)
    }
  }, [target, targetCamera])
  return (
    <>
      <div className="overlay">
        <div className="menu">
          <button className="button-52" onClick={() => handleButtonClick([2, 8, 11], [-6, 5, 10])}>
            PLAY
          </button>

          <button className="button-52" onClick={() => handleButtonClick([10, 5, -10], [7, 5, -4])}>
            DESKTOP
          </button>
          <button className="button-52" onClick={() => handleButtonClick([20, -5, 10], [15, -5, 0])}>
            SKATE
          </button>
          <button className="button-52" onClick={() => handleButtonClick([30, 20, 10], [0, 0, 0])}>
            RESET
          </button>
        </div>
      </div>
      <Canvas flat>
        <Fisheye zoom={0}>
          <CameraControls ref={cameraControlsRef} minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
          <ambientLight intensity={Math.PI / 2} />
          <group scale={20} position={[5, -11, -5]}>
            <Level />
            <Sudo />
            <Camera />
            <Cactus />
            <Box position={[-0.8, 1.4, 0.4]} scale={0.15} />
          </group>
          <Environment preset="city" background blur={1} />
          <PerspectiveCamera makeDefault position={defaultCameraCords} />
        </Fisheye>
      </Canvas>
    </>
  )
}
