import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Interaction(props) {
    const [hover,setHover] = useState(false)
    const interactableOnHover = useRef()
    const hoverInteraction = () => {
        
    }
    const displacement = 0.05
    useFrame(()=>{
      if(hover){
        if(interactableOnHover.current.position.y <=displacement){
          interactableOnHover.current.position.y += displacement
        }
      }
      else{
        interactableOnHover.current.position.y = 0
      }
    })
  const { nodes, materials } = useGLTF("/Rapogen building.glb");
  return (
    <group {...props} dispose={null} ref = {interactableOnHover}>
      <group scale={[2.23, 4.76, 2.23]}>
        <mesh onPointerOver={()=>setHover(true)}
            onPointerOut = {()=>setHover(false)}
          geometry={nodes.Plane001.geometry}
          material={materials["Material.001"]}
          
        />
        <mesh
          geometry={nodes.Plane001_1.geometry}
          material={materials["Material.002"]}
          
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Rapogen building.glb");
