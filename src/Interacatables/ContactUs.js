import React, { useRef ,useState} from "react";
import { useGLTF } from "@react-three/drei";
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
    <group {...props} dispose={null} position={[-3.23, 0.99, 6.54]} ref={interactableOnHover}>
      <mesh
        castShadow
        receiveShadow
        onPointerOver={()=>setHover(true)}
            onPointerOut = {()=>setHover(false)}
            onClick = {()=>{handleClick("https://google.com")}}
        geometry={nodes.Contact_us.geometry}
        material={materials["Contact us"]}
        
      />
    </group>
  );
}

useGLTF.preload("/ContactUs.glb");
