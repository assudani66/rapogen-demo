import React, { useRef ,useState} from "react";
import { useGLTF,Html } from "@react-three/drei";
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
      onClick = {()=>{handleClick("https://www.spatial.io/s/PannVerse-by-Poorvaa-Productions-6352b6d196ea7a00015b7f42?share=5145976202741261364")}}
        geometry={nodes.Portfolio.geometry}
        material={materials.Material}
      />
          <Html>{hover && <div className="container" ><h2 className="heading">E-commerce</h2><br/><img className="image" src="https://ik.imagekit.io/Phantomcat20/ecomerse.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672495687764" alt="music"/></div>}</Html>
    </group>
  );
}

useGLTF.preload("/Portfolio.glb");
