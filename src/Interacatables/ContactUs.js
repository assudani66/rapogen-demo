import React, { useRef ,useState} from "react";
import { useGLTF,Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


export default function ContactUs(props) {
  // {x: 0.11977469624782344, y: 1.5778825491786426, z: 3.4591412611725136}
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
            onClick = {()=>{handleClick("https://forms.zohopublic.in/rapogen/form/Betaaccesssignup/formperma/IIt-RwlrTEC40lUuXYVTP3xpgyQ6ZSeG7tkGBKLlluQ")}}
        geometry={nodes.Contact_us.geometry}
        material={materials["Contact us"]}
        
      />
          <Html>{hover && <div class="container" ><h2 className="heading">Contact Us</h2><p className="info">For a quick demo and to reach us please fill and submit the below form or email us at info@rapogen.com</p></div>}</Html>
    </group>
  );
}

useGLTF.preload("/ContactUs.glb");
