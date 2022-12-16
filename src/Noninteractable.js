import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function NonInteractable(props) {
  const { nodes, materials } = useGLTF("/map.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grid002.geometry}
        material={materials["Room.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grid002_1.geometry}
        material={materials.Glow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grid002_2.geometry}
        material={materials.Room}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grid002_3.geometry}
        material={materials.Diamond}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grid002_4.geometry}
        material={materials.Line}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grid002_5.geometry}
        material={materials.Pedestal}
      />
    </group>
  );
}

useGLTF.preload("/map.glb");