import React, { useRef ,useState} from "react";
import { useGLTF,Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


export default function ContactUs(props) {

  const [hover,setHover] = useState(false)
  const interactableOnHover = useRef()

  const handleHover = (delta) => {
    if(hover){
      if(interactableOnHover.current.position.y <=0.99 + 0.1){
        interactableOnHover.current.position.y += 0.5 *delta
      }
    }
    else{
      interactableOnHover.current.position.y = 0.99
    }
  }

  const handleClick = (url) =>{
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  useFrame((state,delta)=>{
    handleHover(delta)
    interactableOnHover.current.rotation.y += delta * 0.5
    
  })

  const { nodes, materials } = useGLTF("/ContactUs.glb");
  return (
    
    <group {...props} dispose={null}>
    <mesh
    ref={interactableOnHover}
      castShadow
      receiveShadow
      geometry={nodes.Concert.geometry}
      material={materials.Concert}
      position={[-3.47, 1.13, 6.61]}
      onPointerOver={()=>setHover(true)}
      onPointerOut = {()=>setHover(false)}
      onClick = {()=>{handleClick("https://forms.zohopublic.in/rapogen/form/Betaaccesssignup/formperma/IIt-RwlrTEC40lUuXYVTP3xpgyQ6ZSeG7tkGBKLlluQ")}}
      rotation={[-Math.PI, 0.89, -Math.PI]}
      scale={0.03}
    >
      <Html>{hover && <div className="container" ><h2 className="heading">Music</h2><br/><img className="image" src="https://ik.imagekit.io/Phantomcat20/ecomerse.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672495687764" alt="music"/></div>}</Html>
    </mesh>
  </group>

  );
}

useGLTF.preload("/ContactUs.glb");
