import React, { useRef, useState } from "react";
import { useGLTF,Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Sphere(props) {
  const { nodes, materials } = useGLTF("/Sphere.glb");

  const [hover,setHover] = useState(false)
  const interactableOnHover = useRef()

  const handleHover = (delta) => {
    if(hover){
      if(interactableOnHover.current.position.y <=1.16 + 0.1){
        interactableOnHover.current.position.y += 0.5 *delta
      }
    }
    else{
      interactableOnHover.current.position.y = 1.16
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
    <group {...props} dispose={null} >
      <mesh
      ref= {interactableOnHover}

        castShadow
        receiveShadow
        geometry={nodes.Cinema.geometry}
        material={materials["Material.001"]}
        onPointerOver={()=>setHover(true)}
        onPointerOut = {()=>setHover(false)}
        onClick = {()=>{handleClick("https://forms.zohopublic.in/rapogen/form/Betaaccesssignup/formperma/IIt-RwlrTEC40lUuXYVTP3xpgyQ6ZSeG7tkGBKLlluQ")}}
        position={[5, 1.16, 6.56]}
        rotation={[0, -0.7, 0]}
        scale={[0.84, 0.58, 0.07]}
      ><Html>{hover && <div className="container" ><h2 className="heading">Music</h2><br/><img className="image" src="https://ik.imagekit.io/Phantomcat20/movies.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672495687842" alt="movies"/></div>}</Html></mesh>
    </group>
  );
}

useGLTF.preload("/Sphere.glb");