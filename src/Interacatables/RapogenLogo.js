import React, { useRef } from "react";
import { Sparkles, useGLTF } from "@react-three/drei";

export default function RapogenLogo(props) {
  const { nodes, materials } = useGLTF("/rapogen_logo.glb");
  const Logo = useRef()
 
  return (
    <group {...props} dispose={null} ref={Logo}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rapogen_T_Shirt.geometry}
        material={materials["Rapogen T Shirt"]}
        position={[-2.19, 1.55, 2.48]}
      />
      <Sparkles size={2} count = {100} />
    </group>
  );
}

useGLTF.preload("/rapogen_logo.glb");