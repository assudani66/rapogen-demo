import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import ReusableCard from './ResuableCard'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const info = {
    heading: "Movies",
    paragraph:
      "We are building plug-n-play Metaverse Suites for various Business use cases.",
    imgSrc:
      "https://ik.imagekit.io/Phantomcat20/Eccomerce.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675192611393"
  };
root.render(
    <div  style={{width: "100vw",
    height: "100vh"} }>
    <Canvas className = "fade-container"
        camera={ {
            fov: 30,
            near: 0.1,
            far: 200,
            position: [14, 27, -13 ]
        } }
    >
        <Experience />
    </Canvas>
        <img src='https://ik.imagekit.io/Phantomcat20/Rapogen_logo.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675159242297'  className= "logo fade-container" />
        <ReusableCard heading={info.heading} paragraph={info.paragraph} imgSrc = {info.imgSrc}/>
     </div>
)
