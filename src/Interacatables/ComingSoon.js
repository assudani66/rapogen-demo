import React, { useRef ,useState} from "react";
import { Html,useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function ComingSoon (props) {

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


  const { nodes, materials } = useGLTF("/comingSoonOne.glb");
  return (
    <group {...props} dispose={null}>
      <group
      ref={interactableOnHover}
        position={[-7.49, 1.32, 2.43]}
        rotation={[-3.01, -0.34, 2.85]}
        scale={0.67}
        onPointerOver={()=>setHover(true)}
        onPointerOut = {()=>setHover(false)}
        onClick = {()=>{handleClick("https://www.spatial.io/s/PannVerse-by-Poorvaa-Productions-6352b6d196ea7a00015b7f42?share=5145976202741261364")}}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Hat}
        >
        <Html>{hover && <div className="container" ><h2 className="heading">Ed Tech</h2><br/><img className="image" src="https://ik.imagekit.io/Phantomcat20/education.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672495687802" alt="music"/></div>}</Html></mesh>        
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/comingSoonOne.glb");