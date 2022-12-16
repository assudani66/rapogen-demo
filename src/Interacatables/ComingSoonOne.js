import React, { useRef ,useState} from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";





export default function ComingSoonOne(props) {
    const [hover,setHover] = useState(false)
  const interactableOnHover = useRef()

  const handleHover = (delta) => {
    if(hover){
      if(interactableOnHover.current.position.y <=1.4 + 0.1){
        interactableOnHover.current.position.y += 0.5 *delta
      }
    }
    else{
      interactableOnHover.current.position.y = 1.44
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
    <group {...props} dispose={null} ref={interactableOnHover} position={[-7.32, 1.44, 2.47]}>
      <mesh
        castShadow
        receiveShadow
        onPointerOver={()=>setHover(true)}
        onPointerOut = {()=>setHover(false)}
        onClick = {()=>{handleClick("https://google.com")}}
        geometry={nodes.Coming_soon002.geometry}
        material={materials["Coming Soon"]}
        
        scale={[0.27, 0.72, 0.27]}
      />
    </group>
  );
}

useGLTF.preload("/comingSoonOne.glb");