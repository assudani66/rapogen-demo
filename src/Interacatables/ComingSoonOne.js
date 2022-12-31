import React, { useRef, useState } from "react";
import { Html,useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function ComingSoonOne(props) {
  const { nodes, materials } = useGLTF("/comingSoon.glb");

  const [hover,setHover] = useState(false)
  const interactableOnHover = useRef()

  const handleHover = (delta) => {
    if(hover){
      if(interactableOnHover.current.position.y <=1.59 + 0.1){
        interactableOnHover.current.position.y += 0.5 *delta
      }
    }
    else{
      interactableOnHover.current.position.y = 1.59
    }
  }

  const handleClick = (url) =>{
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  useFrame((state,delta)=>{
    handleHover(delta)
    interactableOnHover.current.rotation.y += delta * 0.5
    
  })

  return (
    <group {...props} dispose={null}>
      <group position={[-6.52, 1.59, -2.3]} scale={[0.32, 1, 0.32]}
      ref={interactableOnHover}
      onPointerOver={()=>setHover(true)}
      onPointerOut = {()=>setHover(false)}
      onClick = {()=>{handleClick("https://forms.zohopublic.in/rapogen/form/Betaaccesssignup/formperma/IIt-RwlrTEC40lUuXYVTP3xpgyQ6ZSeG7tkGBKLlluQ")}}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Building}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.Rails}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials.Window}
        >
          <Html>{hover && <div className="container" ><h2 className="heading">real Estate</h2><br/><img className="image" src="https://ik.imagekit.io/Phantomcat20/RealState.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672495687819" alt="ecommerse"/></div>}</Html>
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/comingSoon.glb");