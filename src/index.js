import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import ReusableCard from './ResuableCard'

const root = ReactDOM.createRoot(document.querySelector('#root'))
// 
const styles = {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, 0%)',
    width:538.35,
    height:'auto',
    zIndex: 1,
  };

root.render(
    <div style={{ width: "100vw", height: "100vh" }}>
    <Canvas
        camera={ {
            fov: 30,
            near: 0.1,
            far: 200,
            position: [ 29, 29, -27 ]
        } }
    >
        <Experience />
    </Canvas>
        {/* <img src='https://ik.imagekit.io/Phantomcat20/Rapogen_logo.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675159242297' style={styles}/> */}
        <ReusableCard style={styles} />
     </div>
)
