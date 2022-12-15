import { useFrame } from '@react-three/fiber'
import { MapControls, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'
import { useLoader } from '@react-three/fiber/dist/react-three-fiber.cjs'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Interaction from './Interactable'

export default function Experience() {
    const cube = useRef()
    useFrame((state, delta) => {
    })

    // const nonInteractableObject = useLoader(GLTFLoader,"./map.glb")

    return <>

        <Perf position="top-left" />

        {/* <OrbitControls makeDefault /> */}

        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        <Interaction />
        <MapControls makeDefault/>

    </>
}