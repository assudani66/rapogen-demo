
import React, { useMemo, useRef ,useState} from "react";
import { useGLTF ,Html, TransformControls, Plane, Box, Tube} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import ReusableCard from "../ResuableCard";
import * as THREE from "three"
import {useControls} from 'leva'

const info = {
  heading: "Movies",
  paragraph:
    "We are building plug-n-play Metaverse Suites for various Business use cases.",
  imgSrc:
    "https://ik.imagekit.io/Phantomcat20/Eccomerce.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675192611393"
};

export default function Sphere(props) {
  const { posX, posY, posZ, devMode} = useControls({
    posX: {
      value: 4,
      min: -10,
      max: 10,
      step: 0.1,
    },
    posY: {
      value: 4,
      min: -10,
      max: 10,
      step: 0.1,
    },
    posZ : {
      value: 4,
      min: -10,
      max: 10,
      step: 0.1,
    },
    devMode : false
  })
    const [hover,setHover] = useState(false)
    const vec = new THREE.Vector3()
    const [clicked,setClicked] = useState(false)
    const defalutState = new THREE.Vector3()
    const focusRef = useRef()
    const lookAtRef = useRef()
    const defalutStateLookAt = new THREE.Vector3()
  
    const handleClick = (url) =>{
      setClicked(!clicked)
    }
    const handleClicked = (state) => {
      const focusPoint = new THREE.Vector3()
      focusPoint.set(4.2,1.5,5)
      state.camera.lookAt(focusPoint)
      const focusPosition = {x: 12.457295668673545, y: 2.04976933522242, z: 3.878114071691255}
      state.camera.position.lerp(vec.set(focusPosition.x,focusPosition.y,focusPosition.z),0.01)
      console.log(state.camera.rotation)

      state.camera.updateProjectionMatrix()
    }
    useFrame((state,delta)=>{
      focusRef.current.rotation.y += delta * 0.6
      
      if(clicked){
        handleClicked(state)
      }

      if(clicked===false){
        !devMode && state.camera.position.lerp(defalutState.set(10, 20, -12),0.01)
        state.camera.lookAt(defalutStateLookAt.set(-3.6,-2.0,3.3))
        devMode && console.log(lookAtRef.current.position)
        devMode && console.log(state.camera.position)
        
      }
    })

  const { nodes, materials } = useGLTF("/Sphere.glb");
  return (
    <group >
      <Box material-color="hotpink" position={[posX,posY,posZ]}  onClick={()=>setClicked(!clicked)} ref={lookAtRef}/>
        <group {...props} dispose={null} position={[5, 1.27, 6.63]}  scale = {2.55}  ref={focusRef}>
          <mesh
            castShadow
            receiveShadow
                onClick={(e) => { 
                  handleClick()
                  }}   
            geometry={nodes.Sphere.geometry}
            material={materials.Team}
          />
              
        </group>
    </group>
  );
}

useGLTF.preload("/Sphere.glb");

{/* <Html>{clicked && <div class="container" ><h2 className="heading">Team</h2><p className="info">
Sriram Venkatesh-CoFounder<br/>
Vinoth Ravichandran-CoFounder<br/>
Akshay-CoFounder</p></div>}</Html> */}
