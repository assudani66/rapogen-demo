import React, { useRef ,useState} from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Portfolio(props) {
  const [hover,setHover] = useState(false)
  const interactableOnHover = useRef()

  const handleHover = (delta) => {
    if(hover){
      if(interactableOnHover.current.position.y <=1.44+0.1){
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
    interactableOnHover.current.rotation.y += delta * 0.3
  })
  const { nodes, materials } = useGLTF("/Portfolio.glb");
  return (
    <group {...props} dispose={null} position={[3.62, 1.37, -1.64]} ref={interactableOnHover}>
      <mesh
      onPointerOver={()=>setHover(true)}
      onPointerOut = {()=>setHover(false)}
      onClick = {()=>{handleClick("https://google.com")}}
        geometry={nodes.Portfolio.geometry}
        material={materials.Material}
      />
    </group>
  );
}

useGLTF.preload("/Portfolio.glb");
