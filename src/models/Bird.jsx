import {useRef, useEffect} from 'react'

import birdScene from '../assets/3d/bird.glb'
import {useAnimations, useGLTF} from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Bird = () => {
const {scene, animations} = useGLTF(birdScene);
const birdRef = useRef();
const {actions} = useAnimations(animations, birdRef);

//trigger specific actions - bird starts flying in place
useEffect(() => {
  actions['Take 001'].play();
}, [])

//make it move around and towards the island (from the corner of the screen)
useFrame(({clock, camera}) => {
  //update y position to simulate bird-like flying in a sine wave
  //clock.elapsedTime : calculates according to time passed
  birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

  //checks if the bird reaches end of the screen (away from the user)
  if (birdRef.current.position.x > camera.position.x +10) {
    //get bird to turn back - go around the island and back towards the user again
    birdRef.current.rotation.y = Math.PI;
  } else if (birdRef.current.position.x < camera.position.x -10) {
    //bird keep going forward (away from user)
    birdRef.current.rotation.y = 0;
  }

  //update x and z positions based on bird direction
  if(birdRef.current.rotation.y === 0) {
    //move forward
    birdRef.current.position.x += 0.01;
    birdRef.current.position.z -= 0.01;
  } else {
    //move back
    birdRef.current.position.x -= 0.01;
    birdRef.current.position.z += 0.01;
  }
})

  return (
    <mesh position ={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Bird