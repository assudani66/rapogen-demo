import React, { useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
const displacement = 0.05
export default function Interaction(props) {
    const [hover,setHover] = useState(false)
    const interactableOnHover = useRef()

    const handleHover = (delta) => {
      if(hover){
        if(interactableOnHover.current.position.y <=displacement){
          interactableOnHover.current.position.y += 0.5 *delta
        }
      }
      else{
        interactableOnHover.current.position.y = 0
      }
    }


    const handleClick = (url) =>{
      window.open(url, '_blank', 'noopener,noreferrer')
    }

    useFrame((state,delta)=>{
      handleHover(delta)
      interactableOnHover.current.rotation.y += delta * 0.6
      
    })

  const { nodes, materials } = useGLTF("/Rapogen building.glb");
  return (
    <group {...props} dispose={null} ref = {interactableOnHover}>
      <group scale={[2.23, 4.76, 2.23]}>
        <mesh onPointerOver={()=>setHover(true)}
            onPointerOut = {()=>setHover(false)}
            onClick = {()=>{handleClick("https://google.com")}}
          geometry={nodes.Plane001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Plane001_1.geometry}
          material={materials["Material.002"]}
          
        />
        <Html>{hover && <p style={{visibility: hover}}>"makingRendering"</p>}</Html>
      </group>
    </group>
  );
}

useGLTF.preload("/Rapogen building.glb");
