import React from "react";
import { OrbitControls } from "@react-three/drei";

const Man = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxBufferGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default Man;
