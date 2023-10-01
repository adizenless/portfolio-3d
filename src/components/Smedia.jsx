/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 smedia.gltf --transform 
Files: smedia.gltf [409.45KB] > smedia-transformed.glb [597.88KB] (-46%)
Author: aniljaco (https://sketchfab.com/aniljaco)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/social-media-icons--anil-jaco-937dbb8864d748ca8fd5c10ac3042be6
Title: Social Media Icons_ Anil Jaco
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Smedia(props) {
  const { nodes, materials } = useGLTF('/smedia-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.PaletteMaterial002} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/smedia-transformed.glb')
