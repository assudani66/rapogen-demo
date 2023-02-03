import React, { useRef,useState } from "react";
import { Sparkles, useGLTF,Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function RapogenLogo(props) {
  const { nodes, materials } = useGLTF("/rapogen_logo.glb");
  const Logo = useRef()
  useFrame((state,delta)=>{
    
  })
 

  const [hover,setHover] = useState(false)
  const interactableOnHover = useRef()

  const handleHover = (delta) => {
    if(hover){
      if(interactableOnHover.current.position.y <=1.55 + 0.05){
        interactableOnHover.current.position.y += 0.5 *delta
      }
    }
    else{
      interactableOnHover.current.position.y = 1.55
    }
  }

  const handleClick = (url) =>{
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  useFrame((state,delta)=>{
    handleHover(delta)
    interactableOnHover.current.rotation.y += delta * 0.6
  })

  return (
    <group {...props} dispose={null} ref={interactableOnHover} position={[-2.19, 1.55, 2.48]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rapogen_T_Shirt.geometry}
        material={materials["Rapogen T Shirt"]}
        onPointerOver={()=>setHover(true)}
            onPointerOut = {()=>setHover(false)}
            onClick = {()=>{handleClick("https://google.com")}}
      />
    <Html>{hover && <div class="container" ><h2 className="heading">About Us</h2><p className="info">We are building plug-n-play Metaverse Suites for various Business use cases.</p></div>}</Html>
    </group>
  );
}

useGLTF.preload("/rapogen_logo.glb");