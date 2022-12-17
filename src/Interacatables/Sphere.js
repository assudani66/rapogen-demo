import React, { useRef ,useState} from "react";
import { useGLTF ,Html} from "@react-three/drei";

import { useFrame } from "@react-three/fiber";





export default function Sphere(props) {
    const [hover,setHover] = useState(false)
    const interactableOnHover = useRef()
  
    const handleHover = (delta) => {
      if(hover){
        if(interactableOnHover.current.position.y <=1.27+0.1){
          interactableOnHover.current.position.y += 0.5 *delta
        }
      }
      else{
        interactableOnHover.current.position.y = 1.27
      }
    }

    const handleClick = (url) =>{
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  
    useFrame((state,delta)=>{
      handleHover(delta)
      interactableOnHover.current.rotation.y += delta * 0.6
    })
  const { nodes, materials } = useGLTF("/Sphere.glb");
  return (
    <group {...props} dispose={null} position={[5, 1.27, 6.63]} ref={interactableOnHover} scale = {2.55}>
      <mesh
        castShadow
        receiveShadow
        onPointerOver={()=>setHover(true)}
            onPointerOut = {()=>setHover(false)}
            // onClick = {()=>{handleClick("https://google.com")}}
        geometry={nodes.Sphere.geometry}
        material={materials.Team}
      />
      <Html>{hover && <div class="container" ><h2 className="heading">Team</h2><p className="info">
Sriram Venkatesh-CoFounder<br/>
Vinoth Ravichandran-CoFounder<br/>
Akshay-CoFounder</p></div>}</Html>
    </group>
  );
}

useGLTF.preload("/Sphere.glb");