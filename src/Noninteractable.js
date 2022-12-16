/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Map(props) {
  const { nodes, materials } = useGLTF("/map.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-3.18, 0.02, 1.28]}
        rotation={[-Math.PI, 0.82, -Math.PI]}
        scale={[1.12, 1, 0.29]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.Line}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.Room}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials.Diamond}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_3.geometry}
          material={materials.OuterBLocks}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_4.geometry}
          material={materials.InnerBlocks}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_5.geometry}
          material={materials["Centre Podium"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_6.geometry}
          material={materials.Pedestal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_7.geometry}
          material={materials.Glow}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/map.glb");