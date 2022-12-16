import { useFrame } from '@react-three/fiber'
import { MapControls, OrbitControls, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'
import { useLoader } from '@react-three/fiber/dist/react-three-fiber.cjs'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Interaction from './Interacatables/Interactable'
import NonInteractable from './Noninteractable'
import RapogenLogo from './Interacatables/RapogenLogo'

export default function Experience() {
    const cube = useRef()
    useFrame((state, delta) => {
    })
    // const nonInteractableObject = useLoader(GLTFLoader,"./map.glb")
    return <>
        <Perf position="top-left" />
        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <MapControls makeDefault/>
        <Interaction />
        <NonInteractable/>
        <RapogenLogo/>
        <Sparkles count={1000} scale={20} size={6} speed={0.4} />
    </>
}
// Camera Animation
// https://medium.com/@zmommaerts/animate-a-camera-in-react-three-fiber-7398326dad5d
// https://codesandbox.io/s/bold-jepsen-wx036?file=/src/index.js
// Glow
// https://codesandbox.io/s/0c5hv9?file=/src/App.js:1251-1255