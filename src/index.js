import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import NonInteractable from './Noninteractable'
import TestInteract from './TestInteract.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 29, 29, -27 ]
        } }
    >
        <Experience />
    </Canvas>
)