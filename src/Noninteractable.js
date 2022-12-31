import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function map(props) {
  const { nodes, materials } = useGLTF("/map.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[57, -0.34, 57.2]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={28.62}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grid010.geometry}
          material={materials.OuterBLocks}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grid010_1.geometry}
          material={materials.Glow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grid010_2.geometry}
          material={materials.InnerBlocks}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grid010_3.geometry}
          material={materials.Room}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grid010_4.geometry}
          material={materials.Diamond}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grid010_5.geometry}
          material={materials.Line}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grid010_6.geometry}
          material={materials["Centre Podium"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grid010_7.geometry}
          material={materials.Pedestal}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/map.glb");