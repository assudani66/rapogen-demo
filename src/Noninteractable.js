import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function NonInteractable(props) {
  const { nodes, materials } = useGLTF("/map.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={[2.23, 4.76, 2.23]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials["Material.004"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/map.glb");